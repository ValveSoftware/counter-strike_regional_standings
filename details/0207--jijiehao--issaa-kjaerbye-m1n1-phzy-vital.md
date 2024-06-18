### Roster Details<br />
Team Name: JiJieHao<br />
Roster: ISSAA, Kjaerbye, m1N1, phzy, ViTaL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [207](../standings_global.md)<br />
Regional Rank: [29]( ../standings_asia.md)<br />
Final Rank Value:  460.1<br />
<br />
Final Rank Value (460.1) = Starting Rank Value (425.0) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.047[<sup>2</sup>](#table1)

The average of these factors is 0.012<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 425.0
- 400 + ( ( 0.012 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 425.0


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
|           12 |     1735 | 2024-04-19 | Onyx Ravens   | W   | 0.803      | 0.143        | 0.000 (0.000)    | 0.070 (0.008)    | 0 (0.000) |    11.59 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           11 |     1746 | 2024-04-19 | VC            | W   | 0.801      | 0.143        | 0.000 (0.000)    | 0.028 (0.003)    | 0 (0.000) |    11.04 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           10 |     1772 | 2024-04-18 | Onyx Ravens   | L   | 0.796      | -            | -                | -                | -         |   -13.43 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            9 |     1795 | 2024-04-18 | VC            | W   | 0.795      | 0.143        | 0.000 (0.000)    | 0.028 (0.003)    | 0 (0.000) |    10.82 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            8 |     2984 | 2024-02-27 | FlyQuest      | L   | 0.454      | -            | -                | -                | -         |    -0.07 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            7 |     2989 | 2024-02-26 | Twisted Minds | W   | 0.452      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 1 (0.452) |     6.40 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            6 |     3002 | 2024-02-25 | TYLOO         | L   | 0.446      | -            | -                | -                | -         |    -1.92 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            5 |     3581 | 2024-01-28 | Onyx Ravens   | W   | 0.257      | 0.143        | 0.000 (0.000)    | 0.070 (0.003)    | 0 (0.000) |     3.75 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            4 |     3582 | 2024-01-28 | Twisted Minds | W   | 0.256      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     3.75 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            3 |     3595 | 2024-01-27 | Shush         | W   | 0.249      | 0.143        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     3.67 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            2 |     3613 | 2024-01-26 | Onyx Ravens   | L   | 0.242      | -            | -                | -                | -         |    -4.04 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            1 |     3617 | 2024-01-26 | Twisted Minds | W   | 0.242      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     3.53 | DavCost, El1an, ISSAA, m1N1, ViTaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
