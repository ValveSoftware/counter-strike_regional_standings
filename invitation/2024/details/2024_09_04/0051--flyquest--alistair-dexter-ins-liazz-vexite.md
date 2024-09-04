### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Global Rank: [51](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_04.md)<br />
Regional Rank: [2]( ../../standings_asia_2024_09_04.md)<br />
<br />
Final Rank Value:  1029.1<br />
<br />
Final Rank Value (1029.1) = Starting Rank Value (980.8) + Head To Head Adjustments (48.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.485[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 980.8
- 400 + ( ( 0.293 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 980.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |        1 | 2024-09-04 | FaZe               | L   | 1.000      | -            | -                | -                | -         |    -0.82 | aliStair, dexter, INS, Liazz, Vexite |
|           42 |       43 | 2024-09-03 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |    -0.50 | aliStair, dexter, INS, Liazz, Vexite |
|           41 |      128 | 2024-08-30 | Vantage            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.75 | aliStair, dexter, INS, Liazz, Vexite |
|           40 |      130 | 2024-08-30 | Vantage            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.83 | aliStair, dexter, INS, Liazz, Vexite |
|           39 |      359 | 2024-08-26 | MANTRA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.51 | aliStair, dexter, INS, Liazz, Vexite |
|           38 |      369 | 2024-08-26 | MANTRA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.53 | aliStair, dexter, INS, Liazz, Vexite |
|           37 |      552 | 2024-08-21 | KZG                | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.158 (0.053)    | -         |     3.79 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      559 | 2024-08-21 | KZG                | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.158 (0.053)    | -         |     3.93 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      775 | 2024-08-13 | DXA                | W   | 1.000      | 0.333        | -                | 0.231 (0.077)    | -         |     3.32 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      783 | 2024-08-13 | DXA                | W   | 1.000      | 0.333        | -                | 0.231 (0.077)    | -         |     3.43 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      918 | 2024-08-08 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -0.84 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |      966 | 2024-08-07 | BIG                | L   | 1.000      | -            | -                | -                | -         |    -6.48 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |     1676 | 2024-07-18 | FURIA              | L   | 0.878      | -            | -                | -                | -         |    -1.03 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |     1742 | 2024-07-17 | FaZe               | L   | 0.873      | -            | -                | -                | -         |    -0.53 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     2313 | 2024-06-09 | Rooster            | W   | 0.618      | 0.333        | 0.007 (0.001)    | 0.350 (0.072)    | -         |     4.31 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     2369 | 2024-06-08 | Mindfreak          | W   | 0.611      | 0.333        | 0.003 (0.001)    | -                | -         |     3.10 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     2421 | 2024-06-07 | Rooster            | L   | 0.605      | -            | -                | -                | -         |   -15.12 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     2752 | 2024-05-28 | BIG                | L   | 0.541      | -            | -                | -                | -         |    -4.17 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     2774 | 2024-05-27 | Spirit             | L   | 0.535      | -            | -                | -                | -         |    -0.12 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     2902 | 2024-05-22 | Mindfreak          | W   | 0.498      | -            | -                | -                | -         |     2.17 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     2906 | 2024-05-22 | Mindfreak          | W   | 0.498      | -            | -                | -                | -         |     2.22 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     2979 | 2024-05-20 | Canon Event        | W   | 0.485      | -            | -                | -                | -         |     0.73 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     2981 | 2024-05-20 | Canon Event        | W   | 0.485      | -            | -                | -                | -         |     0.74 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     3346 | 2024-05-08 | Liquid             | L   | 0.407      | -            | -                | -                | -         |    -0.45 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     3364 | 2024-05-07 | BetBoom            | W   | 0.400      | 0.889        | 0.232 (0.082)    | 0.521 (0.185)    | 1 (0.400) |    10.14 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     3408 | 2024-05-05 | Ninjas in Pyjamas  | W   | 0.386      | 0.889        | 0.211 (0.072)    | 0.448 (0.154)    | 1 (0.386) |    11.18 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     3422 | 2024-05-04 | Qiang              | W   | 0.379      | 0.889        | 0.037 (0.012)    | 0.405 (0.137)    | 1 (0.379) |     4.33 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     3440 | 2024-05-03 | HEROIC             | L   | 0.372      | -            | -                | -                | -         |    -1.27 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     3468 | 2024-05-02 | BOSS               | W   | 0.366      | 0.889        | 0.013 (0.004)    | 0.412 (0.134)    | 1 (0.366) |     2.87 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     3491 | 2024-05-01 | Natus Vincere      | L   | 0.359      | -            | -                | -                | -         |    -0.04 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     3735 | 2024-04-20 | Bad News Kangaroos | W   | 0.285      | -            | -                | -                | -         |     1.41 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     3781 | 2024-04-19 | Rooster            | W   | 0.279      | -            | -                | -                | -         |     1.78 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     3788 | 2024-04-19 | Mindfreak          | W   | 0.277      | -            | -                | -                | -         |     1.35 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     4034 | 2024-04-10 | FaZe               | L   | 0.219      | -            | -                | -                | -         |    -0.13 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     4048 | 2024-04-10 | Nemiga             | W   | 0.218      | 0.624        | 0.299 (0.041)    | 0.770 (0.105)    | 1 (0.218) |     5.07 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     4098 | 2024-04-09 | Virtus.pro         | L   | 0.211      | -            | -                | -                | -         |    -0.25 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     4129 | 2024-04-08 | Cloud9             | W   | 0.204      | 0.624        | 0.026 (0.003)    | -                | 1 (0.204) |     1.92 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     4272 | 2024-04-03 | Arcade             | W   | 0.171      | -            | -                | -                | -         |     1.01 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     4276 | 2024-04-03 | Arcade             | W   | 0.171      | -            | -                | -                | -         |     1.02 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     4397 | 2024-03-27 | KZG                | W   | 0.125      | -            | -                | -                | -         |     0.58 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     4403 | 2024-03-27 | KZG                | W   | 0.125      | -            | -                | -                | -         |     0.59 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     4668 | 2024-03-13 | Rooster            | W   | 0.032      | -            | -                | -                | -         |     0.20 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     4676 | 2024-03-13 | Rooster            | W   | 0.032      | -            | -                | -                | -         |     0.20 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,480.53)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-09 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-07-21 |      0.901 | $10,000.00     | $9,011.77       |
| 2024-06-09 |      0.618 | $3,250.00      | $2,008.30       |
| 2024-06-02 |      0.575 | $4,000.00      | $2,298.87       |
| 2024-05-12 |      0.434 | $23,500.00     | $10,188.90      |
| 2024-04-14 |      0.245 | $6,000.00      | $1,472.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
