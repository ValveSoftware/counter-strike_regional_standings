### Roster Details<br />
Team Name: Outfit 49<br />
Roster: Gabe, Grimblee, H0NeST, mds, Valter0k<br />
Global Rank: [257](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [62]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  636.4<br />
<br />
Final Rank Value (636.4) = Starting Rank Value (640.6) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.6
- 400 + ( ( 0.130 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 640.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3477 | 2026-02-17 | Rave            | L   | 0.696      | -            | -                | -                | -         |    -7.52 | Gabe, Grimblee, H0NeST, mds, Valter0k  |
|           14 |     3938 | 2026-02-06 | Zomblers        | L   | 0.623      | -            | -                | -                | -         |    -5.78 | Gabe, Grimblee, H0NeST, mds, Valter0k  |
|           13 |     3978 | 2026-02-05 | F5              | W   | 0.616      | 0.333        | 0.011 (0.002)    | 0.327 (0.067)    | 0 (0.000) |    13.64 | Gabe, Grimblee, H0NeST, mds, Valter0k  |
|           12 |     4001 | 2026-02-04 | LAG             | L   | 0.610      | -            | -                | -                | -         |    -1.74 | Gabe, Grimblee, H0NeST, mds, Valter0k  |
|           11 |     4023 | 2026-02-03 | OverKnight      | W   | 0.603      | 0.333        | 0.000 (0.000)    | 0.051 (0.010)    | 0 (0.000) |     6.13 | Gabe, Grimblee, H0NeST, mds, Valter0k  |
|           10 |     4056 | 2026-02-02 | Aether          | L   | 0.596      | -            | -                | -                | -         |    -5.88 | Gabe, Grimblee, H0NeST, mds, Valter0k  |
|            9 |     4754 | 2026-01-10 | Rave            | L   | 0.441      | -            | -                | -                | -         |    -5.04 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|            8 |     4764 | 2026-01-09 | NRG             | L   | 0.436      | -            | -                | -                | -         |    -0.23 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|            7 |     4988 | 2025-12-15 | regain          | L   | 0.270      | -            | -                | -                | -         |    -2.71 | Gabe, H0NeST, jchancE, mds, Redman     |
|            6 |     5054 | 2025-12-09 | Take Flyte      | W   | 0.230      | 0.333        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     2.26 | Gabe, H0NeST, jchancE, mds, Redman     |
|            5 |     5072 | 2025-12-08 | Wanted Goons    | W   | 0.223      | 0.333        | 0.000 (0.000)    | 0.163 (0.012)    | 0 (0.000) |     3.33 | Gabe, H0NeST, jchancE, mds, Redman     |
|            4 |     5141 | 2025-12-05 | InControl       | L   | 0.203      | -            | -                | -                | -         |    -1.55 | Gabe, H0NeST, jchancE, mds, Redman     |
|            3 |     5192 | 2025-12-03 | Ghost           | W   | 0.189      | 0.333        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.23 | Gabe, H0NeST, jchancE, mds, Redman     |
|            2 |     5631 | 2025-11-15 | Voca            | L   | 0.068      | -            | -                | -                | -         |    -0.04 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|            1 |     5885 | 2025-11-07 | SportsBetExpert | L   | 0.016      | -            | -                | -                | -         |    -0.30 | Gabe, H0NeST, jchancE, mds, REKMEISTER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,921.71)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      0.743 | $1,000.00      | $743.31         |
| 2026-02-22 |      0.729 | $1,000.00      | $728.91         |
| 2026-01-11 |      0.449 | $1,000.00      | $449.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
