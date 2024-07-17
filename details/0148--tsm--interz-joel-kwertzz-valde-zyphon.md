### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  741.5<br />
<br />
Final Rank Value (741.5) = Starting Rank Value (726.0) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 726.0


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
|           18 |     2029 | 2024-04-19 | Sangal            | L   | 0.607      | -            | -                | -                | -         |    -1.87 | interz, joel, KWERTZZ, valde, Zyphon |
|           17 |     2285 | 2024-04-10 | FORZE             | L   | 0.548      | -            | -                | -                | -         |    -2.85 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           16 |     2343 | 2024-04-09 | Betera            | W   | 0.541      | 0.500        | 0.008 (0.002)    | 0.055 (0.015)    | 0 (0.000) |     8.95 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           15 |     2474 | 2024-04-04 | 9 Pandas          | L   | 0.508      | -            | -                | -                | -         |    -1.67 | joel, KWERTZZ, poizon, valde, Zyphon |
|           14 |     2553 | 2024-04-02 | KOI               | L   | 0.494      | -            | -                | -                | -         |    -1.25 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |     2613 | 2024-03-28 | 9INE              | W   | 0.461      | 0.500        | 0.000 (0.000)    | 0.080 (0.018)    | 0 (0.000) |     3.55 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |     2770 | 2024-03-20 | VP.Prodigy        | L   | 0.406      | -            | -                | -                | -         |    -3.60 | joel, KWERTZZ, poizon, valde, Zyphon |
|           11 |     2881 | 2024-03-14 | EYEBALLERS        | W   | 0.368      | 0.500        | 0.009 (0.002)    | 0.619 (0.114)    | 0 (0.000) |     8.83 | interz, joel, MoDo, valde, Zyphon    |
|           10 |     3093 | 2024-03-06 | Sangal            | L   | 0.314      | -            | -                | -                | -         |    -0.86 | interz, JACKZ, joel, poizon, valde   |
|            9 |     3174 | 2024-03-03 | The Chosen Few    | L   | 0.294      | -            | -                | -                | -         |    -5.06 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     3186 | 2024-03-03 | Nexus             | W   | 0.294      | 0.143        | 0.011 (0.000)    | 0.432 (0.018)    | 0 (0.000) |     6.28 | joel, KWERTZZ, poizon, valde, Zyphon |
|            7 |     3694 | 2024-02-08 | ex-Preasy         | L   | 0.132      | -            | -                | -                | -         |    -1.35 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            6 |     3698 | 2024-02-07 | Gaimin Gladiators | L   | 0.126      | -            | -                | -                | -         |    -0.44 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     3718 | 2024-02-05 | Metizport         | W   | 0.113      | 0.371        | 0.064 (0.003)    | 0.478 (0.020)    | 0 (0.000) |     2.81 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     3771 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.099      | 0.371        | 0.050 (0.002)    | 0.644 (0.024)    | 0 (0.000) |     2.72 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            3 |     3851 | 2024-01-31 | GODSENT           | W   | 0.079      | 0.371        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.53 | interz, joel, KWERTZZ, MoDo, valde   |
|            2 |     3903 | 2024-01-27 | MOUZ NXT          | W   | 0.052      | 0.371        | 0.150 (0.003)    | 1.000 (0.019)    | 0 (0.000) |     1.45 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     3976 | 2024-01-23 | GODSENT           | L   | 0.025      | -            | -                | -                | -         |    -0.63 | interz, joel, KWERTZZ, MoDo, valde   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,312.96)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $2,000.00      | $1,895.21       |
| 2024-02-09 |      0.139 | $3,000.00      | $417.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
