### Roster Details<br />
Team Name: DogEvil<br />
Roster: B1NGO, BZA, lan, Roninbaby, Tiger<br />
Global Rank: [209](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_03.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_03_03.md)<br />
<br />
Final Rank Value:  617.5<br />
<br />
Final Rank Value (617.5) = Starting Rank Value (515.5) + Head To Head Adjustments (102.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.5
- 400 + ( ( 0.060 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 515.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       33 | 2025-02-27 | Shika           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.179 (0.026)    | 0 (0.000) |    12.05 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|           13 |       36 | 2025-02-27 | Change The Game | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.120 (0.017)    | 0 (0.000) |    11.72 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|           12 |       45 | 2025-02-26 | UR              | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.213 (0.030)    | 0 (0.000) |    19.32 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|           11 |       61 | 2025-02-25 | Rare Atom       | L   | 1.000      | -            | -                | -                | -         |    -4.76 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|           10 |       84 | 2025-02-24 | FengDa          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.060 (0.009)    | 0 (0.000) |     8.45 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|            9 |      402 | 2025-02-10 | Rare Atom       | L   | 1.000      | -            | -                | -                | -         |    -4.84 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|            8 |      407 | 2025-02-09 | JiJieHao        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.258 (0.037)    | 0 (0.000) |    18.83 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|            7 |      438 | 2025-02-08 | Housebets       | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.156 (0.022)    | 0 (0.000) |    17.81 | B1NGO, BZA, lan, Roninbaby, Tiger     |
|            6 |      490 | 2025-02-08 | TYLOO           | L   | 1.000      | -            | -                | -                | -         |    -7.00 | B1NGO, heartZ, lan, Roninbaby, Tiger  |
|            5 |      499 | 2025-02-08 | THE             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.65 | B1NGO, heartZ, lan, Roninbaby, Tiger  |
|            4 |      500 | 2025-02-08 | Rare Atom       | L   | 1.000      | -            | -                | -                | -         |    -4.34 | B1NGO, BZA, heartZ, lan, Roninbaby    |
|            3 |     1071 | 2024-12-06 | ATOX            | L   | 0.618      | -            | -                | -                | -         |    -1.37 | BZA, Cate, lan, Roninbaby, tanxiaomei |
|            2 |     1098 | 2024-12-05 | harizma         | W   | 0.611      | 0.333        | 0.001 (0.000)    | 0.084 (0.017)    | 0 (0.000) |    12.79 | BZA, Cate, lan, Roninbaby, tanxiaomei |
|            1 |     1104 | 2024-12-04 | ex-GR           | W   | 0.610      | 0.333        | 0.011 (0.002)    | 0.068 (0.014)    | 0 (0.000) |    13.73 | BZA, Cate, lan, Roninbaby, tanxiaomei |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
