### Roster Details<br />
Team Name: JiJieHao<br />
Roster: ISSAA, Kjaerbye, m1N1, phzy, ViTaL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [201](../standings_global.md)<br />
Regional Rank: [22]( ../standings_asia.md)<br />
Final Rank Value:  439.0<br />
<br />
Final Rank Value (439.0) = Starting Rank Value (416.5) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.008<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 416.5
- 400 + ( ( 0.008 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 416.5


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
|           12 |     2033 | 2024-04-19 | Onyx Ravens   | W   | 0.607      | 0.143        | 0.000 (0.000)    | 0.051 (0.004)    | 0 (0.000) |     9.13 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           11 |     2044 | 2024-04-19 | VC            | W   | 0.606      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     8.86 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           10 |     2070 | 2024-04-18 | Onyx Ravens   | L   | 0.600      | -            | -                | -                | -         |    -9.87 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            9 |     2093 | 2024-04-18 | VC            | W   | 0.599      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     8.72 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            8 |     3281 | 2024-02-27 | FlyQuest      | L   | 0.258      | -            | -                | -                | -         |    -0.05 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            7 |     3286 | 2024-02-26 | Twisted Minds | W   | 0.257      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.257) |     3.83 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            6 |     3299 | 2024-02-25 | TYLOO         | L   | 0.250      | -            | -                | -                | -         |    -0.69 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            5 |     3878 | 2024-01-28 | Onyx Ravens   | W   | 0.062      | 0.143        | 0.000 (0.000)    | 0.051 (0.000)    | 0 (0.000) |     0.93 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            4 |     3879 | 2024-01-28 | Twisted Minds | W   | 0.061      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.91 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            3 |     3892 | 2024-01-27 | Shush         | W   | 0.054      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.81 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            2 |     3910 | 2024-01-26 | Onyx Ravens   | L   | 0.047      | -            | -                | -                | -         |    -0.77 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            1 |     3914 | 2024-01-26 | Twisted Minds | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.70 | DavCost, El1an, ISSAA, m1N1, ViTaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
