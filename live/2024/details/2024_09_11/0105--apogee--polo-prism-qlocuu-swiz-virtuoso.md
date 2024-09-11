### Roster Details<br />
Team Name: Apogee<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Global Rank: [105](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [75]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  819.2<br />
<br />
Final Rank Value (819.2) = Starting Rank Value (759.0) + Head To Head Adjustments (60.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.119[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.0
- 400 + ( ( 0.185 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 759.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |        9 | 2024-09-11 | Qiang             | W   | 1.000      | 0.500        | 0.029 (0.014)    | 0.149 (0.075)    | 0 (0.000) |     7.60 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           26 |       47 | 2024-09-10 | CPH Wolves        | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.570 (0.190)    | 0 (0.000) |    16.22 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           25 |      122 | 2024-09-06 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -6.44 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           24 |      153 | 2024-09-05 | Space             | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.478 (0.239)    | 0 (0.000) |    13.99 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           23 |     1205 | 2024-08-06 | SINNERS           | L   | 0.960      | -            | -                | -                | -         |    -6.97 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           22 |     1425 | 2024-07-31 | SAW               | L   | 0.920      | -            | -                | -                | -         |    -0.96 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           21 |     1695 | 2024-07-23 | Sangal            | L   | 0.866      | -            | -                | -                | -         |    -1.51 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           20 |     1926 | 2024-07-17 | RUSH B            | W   | 0.828      | 0.500        | 0.026 (0.011)    | 0.291 (0.120)    | 0 (0.000) |    16.65 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           19 |     2042 | 2024-07-15 | Rebels            | W   | 0.813      | 0.500        | 0.028 (0.011)    | 0.670 (0.272)    | 0 (0.000) |    18.53 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           18 |     2778 | 2024-06-04 | The Prodigies     | L   | 0.540      | -            | -                | -                | -         |   -13.50 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           17 |     2810 | 2024-06-03 | Johnny Speeds     | L   | 0.533      | -            | -                | -                | -         |    -2.15 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           16 |     2835 | 2024-06-02 | Partizan          | L   | 0.525      | -            | -                | -                | -         |    -8.61 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           15 |     2926 | 2024-05-30 | Enterprise        | W   | 0.504      | 0.371        | 0.039 (0.007)    | 0.673 (0.126)    | 0 (0.000) |    10.21 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           14 |     2944 | 2024-05-29 | SINNERS           | L   | 0.500      | -            | -                | -                | -         |    -2.14 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           13 |     2992 | 2024-05-27 | Entropiq          | W   | 0.485      | -            | -                | -                | 0 (0.000) |     1.63 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           12 |     3052 | 2024-05-23 | GL Academy        | W   | 0.461      | -            | -                | -                | 0 (0.000) |     5.42 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           11 |     3063 | 2024-05-23 | Zero Tenacity     | L   | 0.458      | -            | -                | -                | -         |    -2.23 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           10 |     3593 | 2024-05-06 | Grannys Knockers  | L   | 0.345      | -            | -                | -                | -         |    -6.43 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            9 |     3751 | 2024-04-28 | VP.Prodigy        | W   | 0.293      | 0.396        | 0.019 (0.002)    | 0.231 (0.027)    | 0 (0.000) |     5.17 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            8 |     3760 | 2024-04-28 | Nexus             | W   | 0.292      | 0.396        | 0.009 (0.001)    | 0.415 (0.048)    | 0 (0.000) |     4.91 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            7 |     3924 | 2024-04-20 | Sangal            | L   | 0.241      | -            | -                | -                | -         |    -0.33 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            6 |     3966 | 2024-04-19 | Rebels            | W   | 0.234      | 0.500        | 0.028 (0.003)    | 0.670 (0.078)    | -         |     5.21 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            5 |     4012 | 2024-04-18 | BetBoom           | L   | 0.227      | -            | -                | -                | -         |    -0.52 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            4 |     4018 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.226      | 0.143        | 0.232 (0.007)    | 0.408 (0.013)    | -         |     6.96 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            3 |     4223 | 2024-04-10 | Betera            | W   | 0.174      | -            | -                | -                | -         |     1.97 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            2 |     4276 | 2024-04-09 | FORZE             | L   | 0.168      | -            | -                | -                | -         |    -2.39 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            1 |     4554 | 2024-03-28 | Aurora            | L   | 0.087      | -            | -                | -                | -         |    -0.07 | POLO, Prism, Qlocuu, swiz, virtuoso |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,722.10)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
