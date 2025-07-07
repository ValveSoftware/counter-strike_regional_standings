### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, Liazz, nettik, regali, Vexite<br />
Global Rank: [30](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [4]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  1200.1<br />
<br />
Final Rank Value (1200.1) = Starting Rank Value (1184.3) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.533[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.115[<sup>2</sup>](#table1)
- LAN Wins: 0.641[<sup>2</sup>](#table1)

The average of these factors is 0.420<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1184.3
- 400 + ( ( 0.420 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1184.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      366 | 2025-06-06 | TYLOO         | L   | 0.995      | -            | -                | -                | -         |    -8.50 | INS, Liazz, nettik, regali, Vexite |
|           29 |      376 | 2025-06-05 | Nemiga        | L   | 0.988      | -            | -                | -                | -         |   -17.32 | INS, Liazz, nettik, regali, Vexite |
|           28 |      393 | 2025-06-04 | HEROIC        | L   | 0.980      | -            | -                | -                | -         |    -3.80 | INS, Liazz, nettik, regali, Vexite |
|           27 |      407 | 2025-06-03 | BetBoom       | W   | 0.974      | 0.143        | 0.097 (0.013)    | 0.629 (0.088)    | 1 (0.974) |    11.84 | INS, Liazz, nettik, regali, Vexite |
|           26 |      410 | 2025-06-03 | Fluxo         | W   | 0.974      | 0.143        | 0.042 (0.006)    | 0.448 (0.062)    | 1 (0.974) |     5.62 | INS, Liazz, nettik, regali, Vexite |
|           25 |      687 | 2025-05-16 | JiJieHao      | W   | 0.851      | 0.657        | 0.059 (0.033)    | 0.336 (0.188)    | 1 (0.851) |     8.56 | INS, Liazz, nettik, regali, Vexite |
|           24 |      823 | 2025-05-11 | TYLOO         | L   | 0.818      | -            | -                | -                | -         |    -6.89 | INS, Liazz, nettik, regali, Vexite |
|           23 |      851 | 2025-05-10 | Rare Atom     | W   | 0.812      | 0.657        | 0.061 (0.032)    | 0.564 (0.301)    | 1 (0.812) |    12.29 | INS, Liazz, nettik, regali, Vexite |
|           22 |      875 | 2025-05-09 | TYLOO         | L   | 0.804      | -            | -                | -                | -         |    -6.85 | INS, Liazz, nettik, regali, Vexite |
|           21 |      932 | 2025-05-07 | NomadS        | W   | 0.791      | 0.657        | 0.016 (0.008)    | 0.198 (0.103)    | 1 (0.791) |     2.62 | INS, Liazz, nettik, regali, Vexite |
|           20 |     1069 | 2025-05-01 | FaZe          | L   | 0.753      | -            | -                | -                | -         |    -1.61 | INS, Liazz, nettik, regali, Vexite |
|           19 |     1118 | 2025-04-30 | Spirit        | L   | 0.745      | -            | -                | -                | -         |    -0.60 | INS, Liazz, nettik, regali, Vexite |
|           18 |     1257 | 2025-04-22 | Natus Vincere | L   | 0.697      | -            | -                | -                | -         |    -2.03 | INS, Liazz, nettik, regali, Vexite |
|           17 |     1271 | 2025-04-22 | Virtus.pro    | W   | 0.691      | 1.000        | 0.237 (0.163)    | 0.467 (0.323)    | 1 (0.691) |    19.05 | INS, Liazz, nettik, regali, Vexite |
|           16 |     1284 | 2025-04-21 | Vitality      | L   | 0.684      | -            | -                | -                | -         |    -0.18 | INS, Liazz, nettik, regali, Vexite |
|           15 |     1375 | 2025-04-17 | SemperFi      | W   | 0.657      | 0.143        | -                | 0.164 (0.015)    | 0 (0.000) |     2.69 | INS, Liazz, nettik, regali, Vexite |
|           14 |     1401 | 2025-04-15 | SemperFi      | W   | 0.649      | -            | -                | -                | 0 (0.000) |     2.62 | INS, Liazz, nettik, regali, Vexite |
|           13 |     1424 | 2025-04-15 | Rooster       | W   | 0.644      | 0.143        | 0.007 (0.001)    | 0.213 (0.020)    | -         |     1.64 | INS, Liazz, nettik, regali, Vexite |
|           12 |     2826 | 2025-03-05 | TYLOO         | L   | 0.373      | -            | -                | -                | -         |    -2.48 | dexter, INS, Liazz, regali, Vexite |
|           11 |     2845 | 2025-03-04 | Aurora        | L   | 0.366      | -            | -                | -                | -         |    -0.43 | dexter, INS, Liazz, regali, Vexite |
|           10 |     2857 | 2025-03-03 | paiN          | W   | 0.361      | 0.143        | 0.292 (0.015)    | 0.325 (0.017)    | 1 (0.361) |     9.99 | dexter, INS, Liazz, regali, Vexite |
|            9 |     2890 | 2025-03-02 | Lynn Vision   | W   | 0.351      | 0.143        | 0.176 (0.009)    | 0.660 (0.033)    | 1 (0.351) |     8.73 | dexter, INS, Liazz, regali, Vexite |
|            8 |     2922 | 2025-03-01 | M80           | L   | 0.345      | -            | -                | -                | -         |    -8.63 | dexter, INS, Liazz, regali, Vexite |
|            7 |     3286 | 2025-02-16 | SAW           | L   | 0.260      | -            | -                | -                | -         |    -6.33 | dexter, INS, Liazz, regali, Vexite |
|            6 |     3329 | 2025-02-15 | BIG           | L   | 0.251      | -            | -                | -                | -         |    -3.53 | dexter, INS, Liazz, regali, Vexite |
|            5 |     3353 | 2025-02-14 | Falcons       | L   | 0.245      | -            | -                | -                | -         |    -0.26 | dexter, INS, Liazz, regali, Vexite |
|            4 |     3715 | 2025-01-30 | Astralis      | L   | 0.147      | -            | -                | -                | -         |    -0.66 | dexter, INS, Liazz, regali, Vexite |
|            3 |     3731 | 2025-01-29 | 3DMAX         | L   | 0.138      | -            | -                | -                | -         |    -0.53 | dexter, INS, Liazz, regali, Vexite |
|            2 |     3952 | 2025-01-18 | Spirit        | L   | 0.067      | -            | -                | -                | -         |    -0.05 | dexter, INS, Liazz, regali, Vexite |
|            1 |     3970 | 2025-01-14 | MIBR          | W   | 0.039      | 0.143        | 0.185 (0.001)    | -                | -         |     0.81 | dexter, INS, Liazz, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($66,629.99)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-16 |      0.852 | $40,000.00     | $34,099.52      |
| 2025-05-04 |      0.774 | $10,000.00     | $7,736.63       |
| 2025-04-27 |      0.725 | $25,000.00     | $18,129.56      |
| 2025-03-05 |      0.374 | $6,500.00      | $2,434.11       |
| 2025-02-23 |      0.308 | $12,500.00     | $3,845.85       |
| 2025-01-31 |      0.154 | $2,500.00      | $384.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
