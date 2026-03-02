### Roster Details<br />
Team Name: TDK<br />
Roster: Ax1Le, nafany, sugaR, Xant3r, zorte<br />
Global Rank: [57](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [43]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1152.0<br />
<br />
Final Rank Value (1152.0) = Starting Rank Value (960.8) + Head To Head Adjustments (191.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 960.8
- 400 + ( ( 0.296 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 960.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       64 | 2026-02-27 | WHITEBIRD          | L   | 1.000      | -            | -                | -                | -         |   -13.34 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           36 |       84 | 2026-02-27 | K27                | W   | 1.000      | 0.435        | 0.109 (0.047)    | 0.763 (0.331)    | 0 (0.000) |    22.54 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           35 |      151 | 2026-02-26 | Oramond            | W   | 1.000      | 0.435        | 0.102 (0.044)    | 0.867 (0.377)    | 0 (0.000) |    14.37 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           34 |      192 | 2026-02-24 | Alliance           | W   | 1.000      | 0.384        | 0.124 (0.048)    | 0.943 (0.362)    | 0 (0.000) |    24.25 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           33 |      220 | 2026-02-24 | Inner Circle       | W   | 1.000      | 0.435        | 0.129 (0.056)    | 0.532 (0.231)    | 0 (0.000) |    14.99 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           32 |      268 | 2026-02-22 | MOUZ NXT           | W   | 1.000      | 0.384        | 0.034 (0.013)    | 1.000 (0.384)    | 0 (0.000) |    20.49 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           31 |      311 | 2026-02-22 | ex-RUBY            | W   | 1.000      | 0.435        | 0.029 (0.012)    | 1.000 (0.435)    | 0 (0.000) |    17.56 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           30 |      373 | 2026-02-20 | GenOne             | W   | 1.000      | 0.384        | 0.030 (0.011)    | 0.692 (0.266)    | 0 (0.000) |    16.29 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           29 |      398 | 2026-02-20 | kONO               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.30 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           28 |      474 | 2026-02-18 | SPARTA             | W   | 1.000      | 0.384        | -                | 0.563 (0.216)    | -         |    14.17 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           27 |      492 | 2026-02-18 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |    -9.27 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           26 |      504 | 2026-02-18 | Bushido Wildcats   | W   | 1.000      | -            | -                | -                | -         |     6.61 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           25 |      590 | 2026-02-16 | Rebels             | W   | 1.000      | 0.384        | 0.017 (0.006)    | -                | -         |    18.06 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           24 |      662 | 2026-02-15 | ASTRAL             | W   | 1.000      | 0.435        | -                | 0.498 (0.216)    | -         |    15.65 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           23 |      680 | 2026-02-14 | Enjoy              | W   | 1.000      | -            | -                | -                | -         |     2.71 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           22 |      715 | 2026-02-14 | Sangal             | W   | 1.000      | 0.384        | 0.025 (0.010)    | 0.693 (0.266)    | -         |    19.06 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           21 |      762 | 2026-02-13 | OlyBet             | W   | 1.000      | -            | -                | -                | -         |    13.18 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           20 |      774 | 2026-02-13 | HAVU               | W   | 1.000      | -            | -                | -                | -         |    18.51 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           19 |      798 | 2026-02-12 | CSDIILIT           | W   | 1.000      | -            | -                | -                | -         |     8.03 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           18 |      822 | 2026-02-12 | Famalicão          | W   | 1.000      | -            | -                | -                | -         |    13.59 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           17 |      844 | 2026-02-11 | Atreides           | W   | 1.000      | -            | -                | -                | -         |     6.71 | Ax1Le, nafany, sugaR, Xant3r, zorte  |
|           16 |     2175 | 2025-12-04 | BASEMENT BOYS      | L   | 0.614      | -            | -                | -                | -         |   -14.81 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|           15 |     2216 | 2025-12-02 | Fire Flux          | L   | 0.599      | -            | -                | -                | -         |   -10.40 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|           14 |     2221 | 2025-12-02 | FORZE Reload       | L   | 0.599      | -            | -                | -                | -         |    -9.99 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|           13 |     2392 | 2025-11-25 | AMKAL              | L   | 0.551      | -            | -                | -                | -         |   -13.20 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|           12 |     2395 | 2025-11-25 | ex-RUBY            | L   | 0.551      | -            | -                | -                | -         |    -9.28 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|           11 |     2659 | 2025-11-14 | BASEMENT BOYS      | W   | 0.481      | -            | -                | -                | -         |     2.87 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|           10 |     2712 | 2025-11-12 | ex-Fingers Crossed | L   | 0.469      | -            | -                | -                | -         |    -7.20 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            9 |     2718 | 2025-11-12 | FAVBET             | L   | 0.468      | -            | -                | -                | -         |    -6.89 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            8 |     2757 | 2025-11-11 | SIXSEVEN           | L   | 0.460      | -            | -                | -                | -         |    -8.83 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            7 |     3027 | 2025-11-05 | Fire Flux          | W   | 0.420      | -            | -                | -                | -         |     3.93 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            6 |     3059 | 2025-11-04 | CPH Wolves         | W   | 0.413      | -            | -                | -                | -         |     2.75 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            5 |     3155 | 2025-11-01 | AMKAL              | W   | 0.392      | -            | -                | -                | -         |     2.75 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            4 |     4408 | 2025-09-27 | BetBoom            | L   | 0.160      | -            | -                | -                | -         |    -0.35 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            3 |     4426 | 2025-09-27 | Nuclear TigeRES    | W   | 0.159      | -            | -                | -                | 1 (0.159) |     4.45 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            2 |     4456 | 2025-09-26 | PARIVISION         | L   | 0.154      | -            | -                | -                | -         |    -0.02 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |
|            1 |     4509 | 2025-09-25 | Nemiga             | W   | 0.147      | 0.435        | 0.091 (0.006)    | -                | 1 (0.147) |     4.04 | Ax1Le, FL4MUS, shalfey, sugaR, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,583.21)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-27 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-02-24 |      1.000 | $12,000.00     | $12,000.00      |
| 2025-09-28 |      0.167 | $3,500.00      | $583.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
