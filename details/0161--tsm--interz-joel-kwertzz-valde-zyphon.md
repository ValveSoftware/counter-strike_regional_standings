### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Global Rank: [161](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
<br />
Final Rank Value:  686.4<br />
<br />
Final Rank Value (686.4) = Starting Rank Value (677.1) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.1
- 400 + ( ( 0.134 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 677.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2559 | 2024-04-19 | Sangal            | L   | 0.513      | -            | -                | -                | -         |    -1.27 | interz, joel, KWERTZZ, valde, Zyphon |
|           14 |     2815 | 2024-04-10 | FORZE             | L   | 0.453      | -            | -                | -                | -         |    -2.65 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           13 |     2873 | 2024-04-09 | Betera            | W   | 0.446      | 0.500        | 0.005 (0.001)    | 0.040 (0.009)    | 0 (0.000) |     7.66 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           12 |     3004 | 2024-04-04 | 9 Pandas          | L   | 0.413      | -            | -                | -                | -         |    -1.67 | joel, KWERTZZ, poizon, valde, Zyphon |
|           11 |     3083 | 2024-04-02 | KOI               | L   | 0.400      | -            | -                | -                | -         |    -1.17 | joel, KWERTZZ, poizon, valde, Zyphon |
|           10 |     3143 | 2024-03-28 | 9INE              | W   | 0.366      | 0.500        | 0.000 (0.000)    | 0.067 (0.012)    | 0 (0.000) |     3.38 | joel, KWERTZZ, poizon, valde, Zyphon |
|            9 |     3300 | 2024-03-20 | VP.Prodigy        | L   | 0.311      | -            | -                | -                | -         |    -2.56 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     3411 | 2024-03-14 | EYEBALLERS        | W   | 0.274      | 0.500        | 0.006 (0.001)    | 0.513 (0.070)    | 0 (0.000) |     6.77 | interz, joel, MoDo, valde, Zyphon    |
|            7 |     3623 | 2024-03-06 | Sangal            | L   | 0.220      | -            | -                | -                | -         |    -0.48 | interz, JACKZ, joel, poizon, valde   |
|            6 |     3704 | 2024-03-03 | The Chosen Few    | L   | 0.200      | -            | -                | -                | -         |    -3.17 | joel, KWERTZZ, poizon, valde, Zyphon |
|            5 |     3716 | 2024-03-03 | Nexus             | W   | 0.199      | 0.143        | 0.014 (0.000)    | 0.465 (0.013)    | 0 (0.000) |     4.47 | joel, KWERTZZ, poizon, valde, Zyphon |
|            4 |     4224 | 2024-02-08 | ex-Preasy         | L   | 0.037      | -            | -                | -                | -         |    -0.41 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            3 |     4228 | 2024-02-07 | Gaimin Gladiators | L   | 0.031      | -            | -                | -                | -         |    -0.15 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            2 |     4248 | 2024-02-05 | Metizport         | W   | 0.018      | 0.371        | 0.039 (0.000)    | 0.427 (0.003)    | 0 (0.000) |     0.45 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            1 |     4301 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.005      | 0.371        | 0.032 (0.000)    | 0.564 (0.001)    | 0 (0.000) |     0.12 | joel, KWERTZZ, MoDo, valde, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,840.40)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.853 | $2,000.00      | $1,706.19       |
| 2024-02-09 |      0.045 | $3,000.00      | $134.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
