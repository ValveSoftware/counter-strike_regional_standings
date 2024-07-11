### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  768.1<br />
<br />
Final Rank Value (768.1) = Starting Rank Value (730.9) + Head To Head Adjustments (37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.9
- 400 + ( ( 0.157 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 730.9


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
|           19 |      156 | 2024-06-16 | dreamcatchers fe  | W   | 1.000      | 0.250        | 0.008 (0.002)    | 0.089 (0.022)    | 0 (0.000) |    12.17 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           18 |      895 | 2024-05-26 | Crescent fe       | L   | 0.893      | -            | -                | -                | -         |   -17.84 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |     1105 | 2024-05-19 | Imperial fe       | L   | 0.845      | -            | -                | -                | -         |    -2.96 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |     1124 | 2024-05-18 | ex-GUILD fe       | W   | 0.840      | 0.281        | 0.004 (0.001)    | 0.099 (0.023)    | 0 (0.000) |    10.79 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     1672 | 2024-04-27 | Imperial fe       | L   | 0.699      | -            | -                | -                | -         |    -2.43 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |     1676 | 2024-04-27 | ENCE Athena       | W   | 0.699      | 0.252        | 0.004 (0.001)    | 0.063 (0.011)    | 0 (0.000) |     7.88 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     1860 | 2024-04-19 | BIG EQUIPA        | L   | 0.647      | -            | -                | -                | -         |    -8.43 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     2014 | 2024-04-15 | NAVI Javelins     | L   | 0.620      | -            | -                | -                | -         |    -6.80 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     2027 | 2024-04-14 | Imperial fe       | L   | 0.614      | -            | -                | -                | -         |    -2.12 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     2041 | 2024-04-13 | Astralis W        | W   | 0.607      | 0.303        | 0.002 (0.000)    | 0.034 (0.006)    | 0 (0.000) |     5.99 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     2083 | 2024-04-11 | Let Her Cook      | W   | 0.593      | 0.303        | 0.091 (0.016)    | 0.195 (0.035)    | 0 (0.000) |    14.37 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     2125 | 2024-04-10 | ex-GUILD fe       | L   | 0.587      | -            | -                | -                | -         |   -11.06 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     2187 | 2024-04-09 | NAVI Javelins     | W   | 0.579      | 0.303        | 0.042 (0.007)    | 0.266 (0.047)    | 0 (0.000) |    12.27 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     2245 | 2024-04-07 | Imperial fe       | L   | 0.566      | -            | -                | -                | -         |    -1.85 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     2250 | 2024-04-07 | Fearless Cheetahs | W   | 0.565      | 0.262        | 0.005 (0.001)    | 0.094 (0.014)    | 0 (0.000) |     8.74 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     2263 | 2024-04-06 | ex-GUILD fe       | W   | 0.559      | 0.262        | 0.004 (0.001)    | 0.099 (0.014)    | 0 (0.000) |     7.64 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     2354 | 2024-04-03 | Astralis W        | W   | 0.540      | 0.331        | 0.002 (0.000)    | 0.034 (0.006)    | 0 (0.000) |     6.00 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     2602 | 2024-03-20 | ENCE Athena       | W   | 0.447      | 0.331        | 0.004 (0.001)    | 0.063 (0.009)    | 0 (0.000) |     5.91 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     2900 | 2024-03-07 | Imperial fe       | L   | 0.361      | -            | -                | -                | -         |    -1.07 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,165.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $750.00        | $750.00         |
| 2024-05-26 |      0.893 | $250.00        | $223.37         |
| 2024-04-27 |      0.699 | $321.00        | $224.51         |
| 2024-04-21 |      0.660 | $1,250.00      | $825.61         |
| 2024-04-07 |      0.566 | $250.00        | $141.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
