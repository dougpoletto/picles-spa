import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css";
import { Skeleton } from "../../components/common/Skeleton";

export function Pets() {
  // const [pets, setPets] = useState<IPet[]>([]);

  // useEffect(() => {
  //   getPets().then((data) => {
  //     setPets(data.items);
  //   })
  // }, [])
  
  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        <main className={styles.list}>
          <Skeleton count={5} containerClassName={styles.skeleton}/>
          {/* {
            pets.map(pet => (
              <Card key={pet.id} href={`/pets/${pet.id}`} text={pet.name} thumb={pet.photo} />    
            ))
          } */}
        </main>
      </div>
    </Grid>
  )
}