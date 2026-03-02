### Roster Details<br />
Team Name: Rebels<br />
Roster: Icarus, NOPEEJ, snapy, stadodo, TMKj<br />
Global Rank: [84](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [63]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1016.2<br />
<br />
Final Rank Value (1016.2) = Starting Rank Value (1129.6) + Head To Head Adjustments (-113.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.146[<sup>2</sup>](#table1)
- LAN Wins: 0.704[<sup>2</sup>](#table1)

The average of these factors is 0.386<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1129.6
- 400 + ( ( 0.386 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1129.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |       11 | 2026-03-01 | Fuzos             | W   | 1.000      | 0.317        | 0.008 (0.003)    | 0.480 (0.152)    | 1 (1.000) |    11.18 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           28 |       36 | 2026-02-28 | SAW               | W   | 1.000      | 0.317        | 0.003 (0.001)    | -                | 1 (1.000) |    10.60 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           27 |      149 | 2026-02-26 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |   -24.54 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           26 |      166 | 2026-02-25 | Ursa              | L   | 1.000      | -            | -                | -                | -         |   -21.62 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           25 |      413 | 2026-02-19 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -6.24 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           24 |      418 | 2026-02-19 | HOTU              | L   | 1.000      | -            | -                | -                | -         |    -4.09 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           23 |      426 | 2026-02-19 | Passion UA        | W   | 1.000      | 0.342        | 0.120 (0.041)    | 0.480 (0.164)    | 1 (1.000) |    25.60 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           22 |      476 | 2026-02-18 | Alliance          | L   | 1.000      | -            | -                | -                | -         |    -6.79 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           21 |      539 | 2026-02-17 | ENCE Academy      | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.427 (0.164)    | 0 (0.000) |     8.37 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           20 |      585 | 2026-02-16 | CSDIILIT          | L   | 1.000      | -            | -                | -                | -         |   -26.84 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           19 |      590 | 2026-02-16 | TDK               | L   | 1.000      | -            | -                | -                | -         |   -18.06 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           18 |      644 | 2026-02-15 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -26.01 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           17 |      729 | 2026-02-14 | 1win              | W   | 1.000      | 0.384        | 0.047 (0.018)    | 0.702 (0.270)    | -         |    17.66 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           16 |      766 | 2026-02-13 | BASEMENT BOYS     | W   | 1.000      | 0.384        | -                | 0.301 (0.115)    | -         |     4.14 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           15 |      959 | 2026-02-07 | WHITEBIRD         | L   | 1.000      | -            | -                | -                | -         |   -11.27 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           14 |     1006 | 2026-02-06 | WW                | W   | 1.000      | 0.384        | 0.012 (0.005)    | 0.541 (0.208)    | -         |     9.27 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           13 |     1072 | 2026-02-03 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -29.75 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           12 |     1110 | 2026-02-02 | Pigeons           | W   | 1.000      | 0.384        | 0.066 (0.025)    | 0.399 (0.153)    | -         |     5.17 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           11 |     1545 | 2026-01-18 | BIG               | L   | 0.913      | -            | -                | -                | -         |    -6.03 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|           10 |     1579 | 2026-01-17 | BASEMENT BOYS     | W   | 0.907      | 0.341        | -                | 0.301 (0.093)    | 1 (0.907) |     2.87 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|            9 |     1645 | 2026-01-16 | SAW               | W   | 0.900      | 0.341        | 0.003 (0.001)    | -                | 1 (0.900) |     6.03 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|            8 |     1663 | 2026-01-16 | DimoniX           | W   | 0.899      | -            | -                | -                | 1 (0.899) |     0.56 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|            7 |     1670 | 2026-01-16 | SAW               | L   | 0.898      | -            | -                | -                | -         |   -22.52 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |
|            6 |     1908 | 2025-12-20 | Fuzos             | L   | 0.720      | -            | -                | -                | -         |   -16.84 | Icarus, nesto, NOPEEJ, snapy, stadodo |
|            5 |     1918 | 2025-12-20 | Gentle Mates      | L   | 0.719      | -            | -                | -                | -         |    -3.25 | Icarus, nesto, NOPEEJ, snapy, stadodo |
|            4 |     1919 | 2025-12-20 | Fuzos             | W   | 0.718      | 0.309        | 0.008 (0.002)    | 0.480 (0.107)    | 1 (0.718) |     5.60 | Icarus, nesto, NOPEEJ, snapy, stadodo |
|            3 |     3756 | 2025-10-12 | Famalicão         | W   | 0.260      | -            | -                | -                | 1 (0.260) |     1.62 | Icarus, NOPEEJ, roman, snapy, stadodo |
|            2 |     3777 | 2025-10-11 | Fuzos             | W   | 0.254      | 0.317        | 0.008 (0.001)    | 0.480 (0.039)    | 1 (0.254) |     2.08 | Icarus, NOPEEJ, roman, snapy, stadodo |
|            1 |     4845 | 2025-09-14 | Gentle Mates      | L   | 0.072      | -            | -                | -                | -         |    -0.28 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,617.89)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $3,530.00      | $3,530.00       |
| 2026-01-18 |      0.914 | $1,454.00      | $1,329.20       |
| 2025-10-12 |      0.260 | $2,914.00      | $758.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
