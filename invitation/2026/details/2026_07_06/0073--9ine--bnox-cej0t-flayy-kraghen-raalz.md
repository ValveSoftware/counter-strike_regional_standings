### Roster Details<br />
Team Name: 9INE<br />
Roster: bnox, cej0t, flayy, kraghen, raalz<br />
Global Rank: [73](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [53]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1070.9<br />
<br />
Final Rank Value (1070.9) = Starting Rank Value (1045.0) + Head To Head Adjustments (26.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.407[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.478[<sup>2</sup>](#table1)

The average of these factors is 0.342<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1045.0
- 400 + ( ( 0.342 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1045.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      124 | 2026-06-25 | Inner Circle    | L   | 1.000      | -            | -                | -                | -         |    -6.25 | b1elany, cej0t, flayy, raalz, St0m4k |
|           21 |      143 | 2026-06-24 | GamerLegion     | W   | 1.000      | 0.548        | 0.499 (0.274)    | 0.445 (0.244)    | 1 (1.000) |    29.59 | b1elany, cej0t, flayy, raalz, St0m4k |
|           20 |      162 | 2026-06-23 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -12.93 | b1elany, cej0t, flayy, raalz, St0m4k |
|           19 |     1904 | 2026-04-26 | Gentle Mates    | L   | 0.726      | -            | -                | -                | -         |    -6.29 | bnox, cej0t, flayy, kraghen, raalz   |
|           18 |     1982 | 2026-04-25 | HYPERSPIRIT     | W   | 0.719      | 0.435        | 0.005 (0.001)    | 0.504 (0.157)    | 1 (0.719) |     6.65 | bnox, cej0t, flayy, kraghen, raalz   |
|           17 |     2019 | 2026-04-24 | Dripmen         | L   | 0.713      | -            | -                | -                | -         |   -20.18 | bnox, cej0t, flayy, kraghen, raalz   |
|           16 |     2038 | 2026-04-23 | Misa            | L   | 0.708      | -            | -                | -                | -         |   -19.01 | bnox, cej0t, flayy, kraghen, raalz   |
|           15 |     2655 | 2026-04-03 | BetBoom         | L   | 0.572      | -            | -                | -                | -         |    -0.85 | bnox, cej0t, flayy, kraghen, raalz   |
|           14 |     2743 | 2026-04-02 | Gentle Mates    | W   | 0.566      | 0.500        | 0.127 (0.036)    | 0.473 (0.134)    | 1 (0.566) |    12.77 | bnox, cej0t, flayy, kraghen, raalz   |
|           13 |     2817 | 2026-04-01 | GamerLegion     | L   | 0.560      | -            | -                | -                | -         |    -0.93 | bnox, cej0t, flayy, kraghen, raalz   |
|           12 |     3312 | 2026-03-25 | Monte           | L   | 0.513      | -            | -                | -                | -         |    -1.51 | bnox, cej0t, flayy, kraghen, raalz   |
|           11 |     3337 | 2026-03-24 | OG              | W   | 0.509      | 0.435        | 0.013 (0.003)    | 0.308 (0.068)    | 1 (0.509) |     8.51 | bnox, cej0t, flayy, kraghen, raalz   |
|           10 |     3362 | 2026-03-24 | Inner Circle    | L   | 0.507      | -            | -                | -                | -         |    -2.10 | bnox, cej0t, flayy, kraghen, raalz   |
|            9 |     3373 | 2026-03-24 | INFINITE Talent | W   | 0.506      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.506) |     0.34 | bnox, cej0t, flayy, kraghen, raalz   |
|            8 |     3855 | 2026-03-14 | Alliance        | L   | 0.442      | -            | -                | -                | -         |    -2.10 | bnox, cej0t, flayy, kraghen, raalz   |
|            7 |     3976 | 2026-03-12 | Rebels          | W   | 0.427      | 0.350        | 0.008 (0.001)    | 0.614 (0.092)    | 1 (0.427) |     6.54 | bnox, cej0t, flayy, kraghen, raalz   |
|            6 |     3982 | 2026-03-12 | NIC             | W   | 0.426      | -            | -                | -                | 1 (0.426) |     0.29 | bnox, cej0t, flayy, kraghen, raalz   |
|            5 |     3988 | 2026-03-12 | M80             | L   | 0.426      | -            | -                | -                | -         |    -2.56 | bnox, cej0t, flayy, kraghen, raalz   |
|            4 |     3993 | 2026-03-12 | JiJieHao        | W   | 0.425      | 0.350        | 0.055 (0.008)    | 0.447 (0.067)    | 1 (0.425) |     9.45 | bnox, cej0t, flayy, kraghen, raalz   |
|            3 |     4152 | 2026-03-08 | FOKUS           | W   | 0.402      | 0.435        | 0.085 (0.015)    | 0.602 (0.105)    | 0 (0.000) |     9.96 | bnox, cej0t, flayy, kraghen, raalz   |
|            2 |     4229 | 2026-03-07 | fnatic          | W   | 0.395      | 0.435        | 0.016 (0.003)    | 0.644 (0.111)    | 0 (0.000) |     7.18 | bnox, cej0t, flayy, kraghen, raalz   |
|            1 |     4339 | 2026-03-05 | Echo            | W   | 0.380      | 0.435        | 0.056 (0.009)    | 0.653 (0.108)    | -         |     9.38 | bnox, cej0t, flayy, kraghen, raalz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,095.06)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-04-26 |      0.728 | $6,000.00      | $4,366.86       |
| 2026-04-04 |      0.581 | $9,000.00      | $5,228.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
