### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  701.1<br />
<br />
Final Rank Value (701.1) = Starting Rank Value (689.4) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.4
- 400 + ( ( 0.143 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 689.4


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
|           17 |     2317 | 2024-04-19 | Sangal            | L   | 0.560      | -            | -                | -                | -         |    -1.81 | interz, joel, KWERTZZ, valde, Zyphon |
|           16 |     2573 | 2024-04-10 | FORZE             | L   | 0.501      | -            | -                | -                | -         |    -2.78 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           15 |     2631 | 2024-04-09 | Betera            | W   | 0.494      | 0.500        | 0.007 (0.002)    | 0.049 (0.012)    | 0 (0.000) |     8.34 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           14 |     2762 | 2024-04-04 | 9 Pandas          | L   | 0.460      | -            | -                | -                | -         |    -1.72 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |     2841 | 2024-04-02 | KOI               | L   | 0.447      | -            | -                | -                | -         |    -1.35 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |     2901 | 2024-03-28 | 9INE              | W   | 0.414      | 0.500        | 0.000 (0.000)    | 0.075 (0.015)    | 0 (0.000) |     3.62 | joel, KWERTZZ, poizon, valde, Zyphon |
|           11 |     3058 | 2024-03-20 | VP.Prodigy        | L   | 0.359      | -            | -                | -                | -         |    -3.24 | joel, KWERTZZ, poizon, valde, Zyphon |
|           10 |     3169 | 2024-03-14 | EYEBALLERS        | W   | 0.321      | 0.500        | 0.007 (0.001)    | 0.571 (0.092)    | 0 (0.000) |     7.72 | interz, joel, MoDo, valde, Zyphon    |
|            9 |     3381 | 2024-03-06 | Sangal            | L   | 0.267      | -            | -                | -                | -         |    -0.79 | interz, JACKZ, joel, poizon, valde   |
|            8 |     3462 | 2024-03-03 | The Chosen Few    | L   | 0.247      | -            | -                | -                | -         |    -4.04 | joel, KWERTZZ, poizon, valde, Zyphon |
|            7 |     3474 | 2024-03-03 | Nexus             | W   | 0.246      | 0.143        | 0.018 (0.001)    | 0.480 (0.017)    | 0 (0.000) |     5.50 | joel, KWERTZZ, poizon, valde, Zyphon |
|            6 |     3982 | 2024-02-08 | ex-Preasy         | L   | 0.085      | -            | -                | -                | -         |    -0.89 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     3986 | 2024-02-07 | Gaimin Gladiators | L   | 0.078      | -            | -                | -                | -         |    -0.33 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     4006 | 2024-02-05 | Metizport         | W   | 0.065      | 0.371        | 0.051 (0.001)    | 0.460 (0.011)    | 0 (0.000) |     1.62 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            3 |     4059 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.052      | 0.371        | 0.041 (0.001)    | 0.638 (0.012)    | 0 (0.000) |     1.41 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            2 |     4139 | 2024-01-31 | GODSENT           | W   | 0.031      | 0.371        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.22 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     4191 | 2024-01-27 | MOUZ NXT          | W   | 0.004      | 0.371        | 0.169 (0.000)    | 1.000 (0.002)    | 0 (0.000) |     0.13 | interz, joel, KWERTZZ, MoDo, valde   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,076.84)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $2,000.00      | $1,800.76       |
| 2024-02-09 |      0.092 | $3,000.00      | $276.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
