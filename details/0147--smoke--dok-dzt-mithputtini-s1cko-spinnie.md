### Roster Details<br />
Team Name: Smoke<br />
Roster: dok, dzt, MITHPUTTINI, s1cko, spinnie<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  721.4<br />
<br />
Final Rank Value (721.4) = Starting Rank Value (723.8) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 723.8
- 400 + ( ( 0.160 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 723.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      186 | 2024-07-18 | Case       | L   | 1.000      | -            | -                | -                | -         |    -8.24 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|           14 |      190 | 2024-07-18 | Case       | L   | 1.000      | -            | -                | -                | -         |    -8.84 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|           13 |      247 | 2024-07-17 | Solid      | L   | 1.000      | -            | -                | -                | -         |   -11.94 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|           12 |      254 | 2024-07-17 | Solid      | W   | 1.000      | 0.450        | 0.037 (0.017)    | 0.791 (0.356)    | 0 (0.000) |    19.89 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|           11 |      368 | 2024-07-15 | Hype       | W   | 1.000      | 0.450        | 0.030 (0.014)    | 0.466 (0.210)    | 0 (0.000) |    23.06 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|           10 |      374 | 2024-07-15 | Hype       | L   | 1.000      | -            | -                | -                | -         |    -7.95 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|            9 |     1193 | 2024-06-01 | Case       | L   | 0.848      | -            | -                | -                | -         |    -6.66 | dok, dzt, leleo, spinnie, vhz         |
|            8 |     1263 | 2024-05-30 | Solid      | L   | 0.834      | -            | -                | -                | -         |    -6.97 | dok, dzt, leleo, spinnie, vhz         |
|            7 |     1323 | 2024-05-27 | Vikings KR | W   | 0.815      | 0.371        | 0.011 (0.003)    | 0.415 (0.125)    | 0 (0.000) |    16.28 | beg0d, dok, dzt, spinnie, vhz         |
|            6 |     1472 | 2024-05-21 | BESTIA     | L   | 0.775      | -            | -                | -                | -         |    -3.23 | beg0d, dok, dzt, spinnie, vhz         |
|            5 |     1475 | 2024-05-21 | BESTIA     | L   | 0.774      | -            | -                | -                | -         |    -3.33 | beg0d, dok, dzt, spinnie, vhz         |
|            4 |     1681 | 2024-05-15 | Fluxo      | L   | 0.735      | -            | -                | -                | -         |    -2.05 | beg0d, dok, dzt, spinnie, vhz         |
|            3 |     1683 | 2024-05-15 | Fluxo      | L   | 0.734      | -            | -                | -                | -         |    -2.09 | beg0d, dok, dzt, spinnie, vhz         |
|            2 |     1739 | 2024-05-14 | 9z         | L   | 0.728      | -            | -                | -                | -         |    -0.18 | beg0d, dok, dzt, spinnie, vhz         |
|            1 |     1744 | 2024-05-14 | 9z         | L   | 0.728      | -            | -                | -                | -         |    -0.18 | beg0d, dok, dzt, spinnie, vhz         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($811.10)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
