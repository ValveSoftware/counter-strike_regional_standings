### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  764.4<br />
<br />
Final Rank Value (764.4) = Starting Rank Value (724.2) + Head To Head Adjustments (40.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.2
- 400 + ( ( 0.160 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 724.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       20 | 2024-06-16 | ex-FORZE Ladies   | W   | 1.000      | 0.250        | 0.005 (0.001)    | 0.053 (0.013)    | 0 (0.000) |    11.56 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           18 |      761 | 2024-05-26 | Crescent fe       | L   | 1.000      | -            | -                | -                | -         |   -20.43 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |      971 | 2024-05-19 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -4.16 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |      990 | 2024-05-18 | ex-GUILD fe       | W   | 0.995      | 0.281        | 0.005 (0.001)    | 0.114 (0.032)    | 0 (0.000) |    12.63 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     1538 | 2024-04-27 | Imperial fe       | L   | 0.855      | -            | -                | -                | -         |    -3.55 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |     1542 | 2024-04-27 | ENCE Athena       | W   | 0.855      | 0.252        | 0.004 (0.001)    | 0.077 (0.017)    | 0 (0.000) |     9.40 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     1726 | 2024-04-19 | BIG EQUIPA        | L   | 0.803      | -            | -                | -                | -         |   -10.68 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     1880 | 2024-04-15 | NAVI Javelins     | L   | 0.776      | -            | -                | -                | -         |    -8.73 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     1893 | 2024-04-14 | Imperial fe       | L   | 0.769      | -            | -                | -                | -         |    -3.23 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     1907 | 2024-04-13 | Astralis W        | W   | 0.762      | 0.303        | 0.002 (0.001)    | 0.041 (0.009)    | 0 (0.000) |     7.14 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     1949 | 2024-04-11 | Let Her Cook      | W   | 0.749      | 0.303        | 0.083 (0.019)    | 0.199 (0.045)    | 0 (0.000) |    17.14 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     1991 | 2024-04-10 | ex-GUILD fe       | L   | 0.743      | -            | -                | -                | -         |   -14.12 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     2053 | 2024-04-09 | NAVI Javelins     | W   | 0.735      | 0.303        | 0.041 (0.009)    | 0.290 (0.065)    | 0 (0.000) |    15.32 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     2111 | 2024-04-07 | Imperial fe       | L   | 0.722      | -            | -                | -                | -         |    -2.90 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     2116 | 2024-04-07 | Fearless Cheetahs | W   | 0.721      | 0.262        | 0.005 (0.001)    | 0.104 (0.020)    | 0 (0.000) |    11.27 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     2129 | 2024-04-06 | ex-GUILD fe       | W   | 0.714      | 0.262        | 0.005 (0.001)    | 0.114 (0.021)    | 0 (0.000) |     9.71 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     2220 | 2024-04-03 | Astralis W        | W   | 0.696      | 0.331        | 0.002 (0.001)    | 0.041 (0.009)    | 0 (0.000) |     7.54 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     2469 | 2024-03-20 | ENCE Athena       | W   | 0.603      | 0.331        | 0.004 (0.001)    | 0.077 (0.015)    | 0 (0.000) |     8.10 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     2767 | 2024-03-07 | Imperial fe       | L   | 0.516      | -            | -                | -                | -         |    -1.87 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,475.11)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $750.00        | $750.00         |
| 2024-05-26 |      1.000 | $250.00        | $250.00         |
| 2024-04-27 |      0.855 | $321.00        | $274.48         |
| 2024-04-21 |      0.816 | $1,250.00      | $1,020.20       |
| 2024-04-07 |      0.722 | $250.00        | $180.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
