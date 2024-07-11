### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: bsd, CSO, CutzMeretz, Leomonster, zede<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  814.1<br />
<br />
Final Rank Value (814.1) = Starting Rank Value (788.0) + Head To Head Adjustments (26.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.0
- 400 + ( ( 0.184 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 788.0


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
|           13 |       15 | 2024-07-10 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -8.96 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           12 |       36 | 2024-07-09 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -15.31 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           11 |       54 | 2024-07-08 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -8.16 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           10 |       77 | 2024-07-06 | 9z Academy     | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.038 (0.013)    | 0 (0.000) |     2.40 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|            9 |       87 | 2024-07-01 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -17.50 | bsd, CutzMeretz, Leomonster, perez, zede |
|            8 |       90 | 2024-06-30 | Sharks         | W   | 1.000      | 0.333        | 0.046 (0.015)    | 0.520 (0.173)    | 0 (0.000) |    23.37 | bsd, CutzMeretz, Leomonster, perez, zede |
|            7 |      100 | 2024-06-29 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -11.02 | bsd, CutzMeretz, Leomonster, perez, zede |
|            6 |      117 | 2024-06-26 | Dusty Roots    | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.155 (0.052)    | 0 (0.000) |    12.14 | bsd, CutzMeretz, Leomonster, perez, zede |
|            5 |      220 | 2024-06-14 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -9.26 | CutzMeretz, desh, Leomonster, roz, zede  |
|            4 |      384 | 2024-06-09 | Vikings KR     | W   | 0.986      | 0.450        | 0.012 (0.005)    | 0.432 (0.192)    | 0 (0.000) |    13.30 | CutzMeretz, desh, Leomonster, roz, zede  |
|            3 |      450 | 2024-06-08 | Sharks         | W   | 0.980      | 0.450        | 0.046 (0.020)    | 0.520 (0.229)    | 0 (0.000) |    24.91 | CutzMeretz, desh, Leomonster, roz, zede  |
|            2 |      480 | 2024-06-07 | paiN           | L   | 0.975      | -            | -                | -                | -         |    -0.78 | CutzMeretz, desh, Leomonster, roz, zede  |
|            1 |      556 | 2024-06-06 | ODDIK          | W   | 0.967      | 0.450        | 0.042 (0.018)    | 0.602 (0.262)    | 0 (0.000) |    20.90 | CutzMeretz, desh, Leomonster, roz, zede  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
