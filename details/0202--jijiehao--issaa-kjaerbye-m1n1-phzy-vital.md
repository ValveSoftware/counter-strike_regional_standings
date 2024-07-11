### Roster Details<br />
Team Name: JiJieHao<br />
Roster: ISSAA, Kjaerbye, m1N1, phzy, ViTaL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [202](../standings_global.md)<br />
Regional Rank: [29]( ../standings_asia.md)<br />
Final Rank Value:  443.3<br />
<br />
Final Rank Value (443.3) = Starting Rank Value (418.7) + Head To Head Adjustments (24.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.009<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 418.7
- 400 + ( ( 0.009 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 418.7


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
|           12 |     1869 | 2024-04-19 | Onyx Ravens   | W   | 0.647      | 0.143        | 0.000 (0.000)    | 0.056 (0.005)    | 0 (0.000) |     9.64 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           11 |     1880 | 2024-04-19 | VC            | W   | 0.646      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     9.32 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           10 |     1906 | 2024-04-18 | Onyx Ravens   | L   | 0.640      | -            | -                | -                | -         |   -10.59 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            9 |     1929 | 2024-04-18 | VC            | W   | 0.639      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     9.18 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            8 |     3117 | 2024-02-27 | FlyQuest      | L   | 0.298      | -            | -                | -                | -         |    -0.06 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            7 |     3122 | 2024-02-26 | Twisted Minds | W   | 0.297      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 1 (0.297) |     4.37 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            6 |     3135 | 2024-02-25 | TYLOO         | L   | 0.290      | -            | -                | -                | -         |    -1.51 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            5 |     3714 | 2024-01-28 | Onyx Ravens   | W   | 0.101      | 0.143        | 0.000 (0.000)    | 0.056 (0.001)    | 0 (0.000) |     1.51 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            4 |     3715 | 2024-01-28 | Twisted Minds | W   | 0.100      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.50 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            3 |     3728 | 2024-01-27 | Shush         | W   | 0.094      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.40 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            2 |     3746 | 2024-01-26 | Onyx Ravens   | L   | 0.087      | -            | -                | -                | -         |    -1.43 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            1 |     3750 | 2024-01-26 | Twisted Minds | W   | 0.086      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.28 | DavCost, El1an, ISSAA, m1N1, ViTaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
