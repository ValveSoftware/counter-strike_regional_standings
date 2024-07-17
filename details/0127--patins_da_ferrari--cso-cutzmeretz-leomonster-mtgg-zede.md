### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, Leomonster, MTGG, zede<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  814.8<br />
<br />
Final Rank Value (814.8) = Starting Rank Value (801.6) + Head To Head Adjustments (13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 801.6
- 400 + ( ( 0.187 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 801.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       31 | 2024-07-16 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -15.19 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           13 |      179 | 2024-07-10 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -8.23 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           12 |      200 | 2024-07-09 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -14.68 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           11 |      218 | 2024-07-08 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -8.14 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           10 |      241 | 2024-07-06 | 9z Academy     | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.037 (0.012)    | 0 (0.000) |     2.24 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|            9 |      251 | 2024-07-01 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -16.97 | bsd, CutzMeretz, Leomonster, perez, zede |
|            8 |      254 | 2024-06-30 | Sharks         | W   | 1.000      | 0.333        | 0.046 (0.015)    | 0.501 (0.167)    | 0 (0.000) |    23.39 | bsd, CutzMeretz, Leomonster, perez, zede |
|            7 |      264 | 2024-06-29 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -10.65 | bsd, CutzMeretz, Leomonster, perez, zede |
|            6 |      281 | 2024-06-26 | Dusty Roots    | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.191 (0.064)    | 0 (0.000) |    12.72 | bsd, CutzMeretz, Leomonster, perez, zede |
|            5 |      384 | 2024-06-14 | inSanitY       | L   | 0.981      | -            | -                | -                | -         |    -8.74 | CutzMeretz, desh, Leomonster, roz, zede  |
|            4 |      548 | 2024-06-09 | Vikings KR     | W   | 0.946      | 0.450        | 0.012 (0.005)    | 0.430 (0.183)    | 0 (0.000) |    13.41 | CutzMeretz, desh, Leomonster, roz, zede  |
|            3 |      614 | 2024-06-08 | Sharks         | W   | 0.940      | 0.450        | 0.046 (0.019)    | 0.501 (0.212)    | 0 (0.000) |    23.89 | CutzMeretz, desh, Leomonster, roz, zede  |
|            2 |      644 | 2024-06-07 | paiN           | L   | 0.935      | -            | -                | -                | -         |    -0.79 | CutzMeretz, desh, Leomonster, roz, zede  |
|            1 |      720 | 2024-06-06 | ODDIK          | W   | 0.928      | 0.450        | 0.084 (0.035)    | 0.678 (0.283)    | 0 (0.000) |    21.04 | CutzMeretz, desh, Leomonster, roz, zede  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,487.02)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
