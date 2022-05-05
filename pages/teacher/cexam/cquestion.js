import styles from "../../../styles/Home.module.css";
import Header from "../../../components/Header";
import QuestionBox from "../../../components/QuestionsBox";
import { Card, CardContent } from "@mui/material";

export default function createExam() {
  let i = 1;
  // the selector will match all input controls of type :checkbox
  // and attach a click event handler
  
  return (

    <div>
      <Header title="Create exam" />
      <main className={styles.main}>
        <form>
          <div class="mb-3">
            <label for="formularyName" class="form-label">
              Ingrese la pregunta
            </label>
            <input type="text" class="form-control" id="Question" />
          </div>
          <div class="mb-3">
            <label for="formularyName" class="form-label">
              Respuestas
            </label>

            <input type="text" class="form-control" id="Answer1" />
            <input type="checkbox" id="1" name="ans1" value="1"></input>
            <label for="formularyName" class="form-label"></label>

            <input type="text" class="form-control" id="Answer2" />
            <input type="checkbox" id="2" name="ans2" value="2"></input>
            <label for="formularyName" class="form-label"></label>

            <input type="text" class="form-control" id="Answer3" />
            <input type="checkbox" id="3" name="ans3" value="3"></input>
            <label for="formularyName" class="form-label"></label>

            <input type="text" class="form-control" id="Answer4" />
            <input type="checkbox" id="4" name="ans4" value="4"></input>
            <label for="formularyName" class="form-label"></label>
          </div>
          <div class="text-center">{QuestionBox}</div>
          <Card>
            <CardContent>
              <div class="text-center">
                <button type="btn" class="btn btn-primary">
                  Crear pregunta
                </button>
              </div>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
}
