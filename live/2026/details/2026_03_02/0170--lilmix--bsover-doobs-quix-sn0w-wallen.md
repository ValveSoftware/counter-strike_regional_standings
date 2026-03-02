### Roster Details<br />
Team Name: Lilmix<br />
Roster: bsover, doobs, quix, Sn0w, walleN<br />
Global Rank: [170](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [117]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  768.8<br />
<br />
Final Rank Value (768.8) = Starting Rank Value (802.1) + Head To Head Adjustments (-33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.280[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.1
- 400 + ( ( 0.213 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 802.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      354 | 2026-02-21 | Young Ninjas     | L   | 1.000      | -            | -                | -                | -         |   -17.12 | bsover, doobs, quix, Sn0w, walleN         |
|           17 |      640 | 2026-02-15 | AaB              | L   | 1.000      | -            | -                | -                | -         |   -10.18 | bsover, doobs, Sn0w, walleN, zen          |
|           16 |     1358 | 2026-01-24 | SemperFi         | L   | 0.952      | -            | -                | -                | -         |   -11.58 | bsover, doobs, quix, Sn0w, walleN         |
|           15 |     1409 | 2026-01-23 | Luleflames       | W   | 0.945      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.945) |     2.75 | bsover, doobs, quix, Sn0w, walleN         |
|           14 |     1414 | 2026-01-23 | BIG              | W   | 0.945      | 0.333        | 0.142 (0.045)    | 0.668 (0.210)    | 1 (0.945) |    28.45 | bsover, doobs, quix, Sn0w, walleN         |
|           13 |     1525 | 2026-01-19 | Bebop            | L   | 0.919      | -            | -                | -                | -         |   -10.59 | bsover, doobs, quix, Sn0w, walleN         |
|           12 |     1544 | 2026-01-18 | STATE            | W   | 0.913      | 0.384        | 0.004 (0.001)    | 0.367 (0.129)    | 0 (0.000) |    21.63 | bsover, doobs, quix, Sn0w, walleN         |
|           11 |     1691 | 2026-01-15 | AaB              | L   | 0.893      | -            | -                | -                | -         |    -8.85 | bsover, doobs, quix, Sn0w, walleN         |
|           10 |     1748 | 2026-01-12 | ALGO             | L   | 0.873      | -            | -                | -                | -         |    -7.32 | bsover, doobs, quix, Sn0w, walleN         |
|            9 |     1772 | 2026-01-08 | Bushido Wildcats | L   | 0.846      | -            | -                | -                | -         |   -11.36 | bsover, doobs, quix, Sn0w, walleN         |
|            8 |     2703 | 2025-11-13 | megoshort        | L   | 0.472      | -            | -                | -                | -         |    -6.24 | b0denmaster, bsover, doobs, PlesseN, quix |
|            7 |     2740 | 2025-11-12 | Alliance         | L   | 0.465      | -            | -                | -                | -         |    -0.83 | b0denmaster, bsover, doobs, PlesseN, quix |
|            6 |     2897 | 2025-11-07 | AM               | L   | 0.434      | -            | -                | -                | -         |    -3.28 | b0denmaster, bsover, doobs, PlesseN, quix |
|            5 |     2920 | 2025-11-07 | 777              | W   | 0.433      | 0.335        | 0.000 (0.000)    | 0.067 (0.010)    | 1 (0.433) |     2.85 | b0denmaster, bsover, doobs, PlesseN, quix |
|            4 |     2935 | 2025-11-07 | Boys N Da HUD    | W   | 0.433      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.433) |     1.29 | b0denmaster, bsover, doobs, PlesseN, quix |
|            3 |     2946 | 2025-11-07 | Betclic          | L   | 0.433      | -            | -                | -                | -         |    -1.10 | b0denmaster, bsover, doobs, PlesseN, quix |
|            2 |     2959 | 2025-11-07 | BetBoom          | L   | 0.432      | -            | -                | -                | -         |    -0.42 | b0denmaster, bsover, doobs, PlesseN, quix |
|            1 |     2965 | 2025-11-07 | Sashi            | L   | 0.432      | -            | -                | -                | -         |    -1.42 | b0denmaster, bsover, doobs, PlesseN, quix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($193.98)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.487 | $398.00        | $193.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
