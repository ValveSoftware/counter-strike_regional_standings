### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  871.1<br />
<br />
Final Rank Value (871.1) = Starting Rank Value (839.7) + Head To Head Adjustments (31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.7
- 400 + ( ( 0.217 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 839.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     3057 | 2024-03-20 | Imperial        | L   | 0.359      | -            | -                | -                | -         |    -0.71 | acoR, isak, Keoz, Snax, volt |
|           19 |     3075 | 2024-03-19 | Eternal Fire    | L   | 0.352      | -            | -                | -                | -         |    -0.13 | acoR, isak, Keoz, Snax, volt |
|           18 |     3085 | 2024-03-18 | Legacy          | W   | 0.345      | 0.143        | 0.150 (0.007)    | 0.540 (0.027)    | 1 (0.345) |     8.09 | acoR, isak, Keoz, Snax, volt |
|           17 |     3094 | 2024-03-17 | SAW             | L   | 0.341      | -            | -                | -                | -         |    -1.34 | acoR, isak, Keoz, Snax, volt |
|           16 |     3110 | 2024-03-17 | AMKAL           | W   | 0.339      | 0.143        | 0.111 (0.005)    | 0.515 (0.025)    | 1 (0.339) |     8.43 | acoR, isak, Keoz, Snax, volt |
|           15 |     3326 | 2024-03-08 | BIG             | L   | 0.280      | -            | -                | -                | -         |    -0.73 | acoR, isak, Keoz, Snax, volt |
|           14 |     3633 | 2024-02-24 | 9 Pandas        | L   | 0.193      | -            | -                | -                | -         |    -1.55 | acoR, isak, Keoz, Snax, volt |
|           13 |     3642 | 2024-02-24 | ex-Guild Eagles | W   | 0.192      | 0.143        | 0.009 (0.000)    | 0.265 (0.007)    | 1 (0.192) |     2.98 | acoR, isak, Keoz, Snax, volt |
|           12 |     3648 | 2024-02-23 | fnatic          | W   | 0.186      | 0.143        | 0.428 (0.011)    | 0.666 (0.018)    | 1 (0.186) |     5.78 | acoR, isak, Keoz, Snax, volt |
|           11 |     3666 | 2024-02-22 | HEROIC          | L   | 0.180      | -            | -                | -                | -         |    -0.08 | acoR, isak, Keoz, Snax, volt |
|           10 |     3692 | 2024-02-21 | OG              | W   | 0.172      | 0.143        | 0.170 (0.004)    | 0.158 (0.004)    | 1 (0.172) |     4.07 | acoR, isak, Keoz, Snax, volt |
|            9 |     3723 | 2024-02-20 | ENCE            | L   | 0.165      | -            | -                | -                | -         |    -0.21 | acoR, isak, Keoz, Snax, volt |
|            8 |     3745 | 2024-02-19 | PERA            | W   | 0.160      | 0.143        | 0.061 (0.001)    | 0.462 (0.011)    | 1 (0.160) |     3.24 | acoR, isak, Keoz, Snax, volt |
|            7 |     3754 | 2024-02-19 | Vitality        | L   | 0.158      | -            | -                | -                | -         |    -0.01 | acoR, isak, Keoz, Snax, volt |
|            6 |     3996 | 2024-02-06 | HEROIC          | L   | 0.072      | -            | -                | -                | -         |    -0.03 | acoR, isak, Keoz, Snax, volt |
|            5 |     4002 | 2024-02-05 | MOUZ            | L   | 0.066      | -            | -                | -                | -         |    -0.01 | acoR, isak, Keoz, Snax, volt |
|            4 |     4028 | 2024-02-04 | Monte           | W   | 0.059      | 1.000        | 0.083 (0.005)    | 0.210 (0.012)    | 1 (0.059) |     1.41 | acoR, isak, Keoz, Snax, volt |
|            3 |     4114 | 2024-02-01 | Virtus.pro      | W   | 0.039      | 0.143        | 0.595 (0.003)    | 0.374 (0.002)    | 1 (0.039) |     1.22 | acoR, isak, Keoz, Snax, volt |
|            2 |     4128 | 2024-01-31 | M80             | W   | 0.033      | 0.143        | 0.238 (0.001)    | 0.614 (0.003)    | 1 (0.033) |     0.96 | acoR, isak, Keoz, Snax, volt |
|            1 |     4196 | 2024-01-26 | FaZe            | L   | 0.000      | -            | -                | -                | -         |     0.00 | acoR, isak, Keoz, Snax, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,893.83)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |
| 2024-03-10 |      0.294 | $5,000.00      | $1,470.78       |
| 2024-02-11 |      0.107 | $16,000.00     | $1,707.36       |
| 2024-01-28 |      0.013 | $8,500.00      | $114.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
