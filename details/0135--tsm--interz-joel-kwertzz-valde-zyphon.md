### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  755.7<br />
<br />
Final Rank Value (755.7) = Starting Rank Value (729.6) + Head To Head Adjustments (26.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.6
- 400 + ( ( 0.162 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 729.6


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
|           19 |     1731 | 2024-04-19 | Sangal            | L   | 0.803      | -            | -                | -                | -         |    -2.93 | interz, joel, KWERTZZ, valde, Zyphon |
|           18 |     1987 | 2024-04-10 | FORZE             | L   | 0.743      | -            | -                | -                | -         |    -3.32 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           17 |     2045 | 2024-04-09 | Betera            | W   | 0.736      | 0.500        | 0.002 (0.001)    | 0.089 (0.033)    | 0 (0.000) |    11.31 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           16 |     2176 | 2024-04-04 | 9 Pandas          | L   | 0.703      | -            | -                | -                | -         |    -1.93 | joel, KWERTZZ, poizon, valde, Zyphon |
|           15 |     2255 | 2024-04-02 | KOI               | L   | 0.690      | -            | -                | -                | -         |    -1.95 | joel, KWERTZZ, poizon, valde, Zyphon |
|           14 |     2316 | 2024-03-28 | 9INE              | W   | 0.656      | 0.500        | 0.000 (0.000)    | 0.071 (0.023)    | 0 (0.000) |     4.60 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |     2473 | 2024-03-20 | VP.Prodigy        | L   | 0.601      | -            | -                | -                | -         |    -6.07 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |     2584 | 2024-03-14 | EYEBALLERS        | W   | 0.564      | 0.500        | 0.006 (0.002)    | 0.653 (0.184)    | 0 (0.000) |    13.05 | interz, joel, MoDo, valde, Zyphon    |
|           11 |     2796 | 2024-03-06 | Sangal            | L   | 0.510      | -            | -                | -                | -         |    -1.68 | interz, JACKZ, joel, poizon, valde   |
|           10 |     2877 | 2024-03-03 | The Chosen Few    | L   | 0.489      | -            | -                | -                | -         |    -8.64 | joel, KWERTZZ, poizon, valde, Zyphon |
|            9 |     2889 | 2024-03-03 | Nexus             | W   | 0.489      | 0.143        | 0.012 (0.001)    | 0.397 (0.028)    | 0 (0.000) |    10.24 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     3397 | 2024-02-08 | ex-Preasy         | L   | 0.327      | -            | -                | -                | -         |    -2.95 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            7 |     3401 | 2024-02-07 | Gaimin Gladiators | L   | 0.321      | -            | -                | -                | -         |    -0.75 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            6 |     3421 | 2024-02-05 | Metizport         | W   | 0.308      | 0.371        | 0.073 (0.008)    | 0.587 (0.067)    | 0 (0.000) |     7.72 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     3474 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.294      | 0.371        | 0.046 (0.005)    | 0.573 (0.063)    | 0 (0.000) |     7.87 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     3554 | 2024-01-31 | GODSENT           | W   | 0.274      | 0.371        | 0.000 (0.000)    | 0.017 (0.002)    | 0 (0.000) |     1.94 | interz, joel, KWERTZZ, MoDo, valde   |
|            3 |     3606 | 2024-01-27 | MOUZ NXT          | W   | 0.247      | 0.371        | 0.158 (0.014)    | 1.000 (0.092)    | 0 (0.000) |     6.97 | interz, joel, KWERTZZ, MoDo, valde   |
|            2 |     3679 | 2024-01-23 | GODSENT           | L   | 0.221      | -            | -                | -                | -         |    -5.45 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     4177 | 2024-01-10 | HAVU              | L   | 0.137      | -            | -                | -                | -         |    -1.88 | interz, JACKZ, joel, MoDo, valde     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,003.60)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-09 |      0.335 | $3,000.00      | $1,003.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
