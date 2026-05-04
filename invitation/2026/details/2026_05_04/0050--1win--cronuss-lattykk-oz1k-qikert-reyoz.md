### Roster Details<br />
Team Name: 1win<br />
Roster: cronuss, lattykk, oz1k, Qikert, reyoz<br />
Global Rank: [50](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [33]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1247.8<br />
<br />
Final Rank Value (1247.8) = Starting Rank Value (1373.3) + Head To Head Adjustments (-125.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.488[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.317[<sup>2</sup>](#table1)
- LAN Wins: 0.896[<sup>2</sup>](#table1)

The average of these factors is 0.525<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1373.3
- 400 + ( ( 0.525 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1373.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      458 | 2026-04-21 | GenOne             | L   | 1.000      | -            | -                | -                | -         |   -27.39 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           54 |      487 | 2026-04-19 | CYBERSHOKE         | L   | 1.000      | -            | -                | -                | -         |   -22.44 | cronuss, lattykk, nbl, oz1k, reyoz     |
|           53 |      542 | 2026-04-16 | Nuclear TigeRES    | L   | 1.000      | -            | -                | -                | -         |   -20.30 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           52 |      572 | 2026-04-14 | Bebop              | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     5.14 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           51 |      820 | 2026-04-05 | BET-M              | W   | 1.000      | 0.435        | 0.051 (0.022)    | 0.725 (0.315)    | 1 (1.000) |    13.92 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           50 |      844 | 2026-04-05 | WW                 | W   | 1.000      | 0.435        | 0.029 (0.013)    | 0.798 (0.347)    | 1 (1.000) |     9.46 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           49 |      905 | 2026-04-04 | TDK                | W   | 1.000      | 0.435        | 0.042 (0.018)    | 0.753 (0.327)    | 1 (1.000) |    14.12 | cronuss, lattykk, nbl, oz1k, reyoz     |
|           48 |     1111 | 2026-04-02 | JUMBO              | W   | 0.986      | -            | -                | -                | 1 (0.986) |     0.79 | cronuss, lattykk, nbl, oz1k, reyoz     |
|           47 |     1120 | 2026-04-02 | K27                | L   | 0.985      | -            | -                | -                | -         |   -10.15 | cronuss, lattykk, nbl, oz1k, reyoz     |
|           46 |     1127 | 2026-04-02 | JUMBO              | W   | 0.984      | -            | -                | -                | 1 (0.984) |     0.65 | cronuss, lattykk, nbl, oz1k, reyoz     |
|           45 |     1565 | 2026-03-27 | Nemiga             | L   | 0.947      | -            | -                | -                | -         |   -12.54 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           44 |     1646 | 2026-03-25 | K27                | W   | 0.934      | 0.384        | 0.127 (0.045)    | 0.860 (0.309)    | -         |    19.97 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           43 |     1768 | 2026-03-23 | Ursa               | W   | 0.921      | 0.384        | -                | 0.956 (0.338)    | -         |     6.48 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           42 |     1881 | 2026-03-21 | Nemiga             | W   | 0.908      | 0.384        | 0.155 (0.054)    | 0.991 (0.346)    | -         |    15.94 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           41 |     1996 | 2026-03-19 | Eternal Fire       | W   | 0.894      | 0.384        | -                | 0.716 (0.246)    | -         |    13.37 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           40 |     2101 | 2026-03-17 | EC BANGA           | W   | 0.879      | -            | -                | -                | -         |     1.68 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           39 |     2473 | 2026-03-09 | Nuclear TigeRES    | L   | 0.826      | -            | -                | -                | -         |   -14.16 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           38 |     2484 | 2026-03-09 | VP.Prodigy         | L   | 0.825      | -            | -                | -                | -         |   -20.24 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           37 |     2495 | 2026-03-09 | DONSTU             | W   | 0.824      | -            | -                | -                | 1 (0.824) |     1.28 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           36 |     2640 | 2026-03-06 | SPARTA             | L   | 0.806      | -            | -                | -                | -         |   -14.87 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           35 |     2662 | 2026-03-05 | ARCRED             | L   | 0.802      | -            | -                | -                | -         |   -17.12 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           34 |     2687 | 2026-03-05 | Nemiga             | W   | 0.800      | 0.333        | 0.155 (0.041)    | 0.991 (0.264)    | 1 (0.800) |    13.17 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           33 |     2717 | 2026-03-04 | MUERTA             | W   | 0.795      | -            | -                | -                | 1 (0.795) |     0.36 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           32 |     2741 | 2026-03-04 | TDK                | L   | 0.793      | -            | -                | -                | -         |   -13.36 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           31 |     2760 | 2026-03-04 | eternal premium    | W   | 0.791      | -            | -                | -                | 1 (0.791) |     0.66 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           30 |     3613 | 2026-02-15 | Nuclear TigeRES    | L   | 0.680      | -            | -                | -                | -         |   -11.67 | cronuss, HObbit, interz, lattykk, oz1k |
|           29 |     3638 | 2026-02-14 | TNC                | L   | 0.675      | -            | -                | -                | -         |   -17.91 | cronuss, HObbit, interz, lattykk, oz1k |
|           28 |     3658 | 2026-02-14 | Nuclear TigeRES    | W   | 0.674      | -            | -                | -                | 1 (0.674) |     9.06 | cronuss, HObbit, interz, lattykk, oz1k |
|           27 |     3676 | 2026-02-14 | K27                | W   | 0.673      | 0.371        | 0.127 (0.032)    | -                | -         |    12.73 | cronuss, HObbit, interz, lattykk, oz1k |
|           26 |     3693 | 2026-02-14 | Rebels             | L   | 0.672      | -            | -                | -                | -         |   -15.04 | cronuss, HObbit, interz, lattykk, oz1k |
|           25 |     3700 | 2026-02-14 | Oxuji              | W   | 0.672      | -            | -                | -                | -         |     2.60 | cronuss, HObbit, interz, lattykk, oz1k |
|           24 |     4048 | 2026-02-03 | EYEBALLERS         | L   | 0.599      | -            | -                | -                | -         |    -4.95 | cronuss, HObbit, interz, lattykk, oz1k |
|           23 |     4080 | 2026-02-02 | Johnny Speeds      | W   | 0.593      | 0.435        | 0.073 (0.019)    | 0.939 (0.242)    | -         |     8.35 | cronuss, HObbit, interz, lattykk, oz1k |
|           22 |     4112 | 2026-02-01 | magic              | L   | 0.585      | -            | -                | -                | -         |   -13.06 | cronuss, HObbit, interz, lattykk, oz1k |
|           21 |     4137 | 2026-01-31 | Leo                | W   | 0.580      | -            | -                | -                | -         |     1.09 | cronuss, HObbit, interz, lattykk, oz1k |
|           20 |     4182 | 2026-01-30 | SINNERS            | L   | 0.573      | -            | -                | -                | -         |    -6.15 | cronuss, HObbit, interz, lattykk, oz1k |
|           19 |     4190 | 2026-01-29 | ex-Fingers Crossed | L   | 0.568      | -            | -                | -                | -         |   -17.02 | cronuss, HObbit, interz, lattykk, oz1k |
|           18 |     4203 | 2026-01-29 | illwill            | W   | 0.566      | 0.435        | 0.049 (0.012)    | -                | -         |     5.93 | cronuss, HObbit, interz, lattykk, oz1k |
|           17 |     4211 | 2026-01-29 | UNiTY              | W   | 0.565      | -            | -                | -                | -         |     0.97 | cronuss, HObbit, interz, lattykk, oz1k |
|           16 |     4225 | 2026-01-28 | EYEBALLERS         | W   | 0.560      | 0.435        | 0.199 (0.049)    | -                | -         |    12.93 | cronuss, HObbit, interz, lattykk, oz1k |
|           15 |     4241 | 2026-01-27 | Ursa               | W   | 0.554      | -            | -                | -                | -         |     2.20 | cronuss, HObbit, interz, lattykk, oz1k |
|           14 |     4274 | 2026-01-26 | Sangal             | W   | 0.546      | -            | -                | -                | -         |     0.83 | cronuss, HObbit, interz, lattykk, oz1k |
|           13 |     4279 | 2026-01-25 | Nemiga             | L   | 0.541      | -            | -                | -                | -         |    -8.75 | cronuss, HObbit, interz, lattykk, oz1k |
|           12 |     4295 | 2026-01-25 | Persona Grata      | L   | 0.539      | -            | -                | -                | -         |   -15.61 | cronuss, HObbit, interz, lattykk, oz1k |
|           11 |     4409 | 2026-01-22 | AM                 | W   | 0.521      | -            | -                | -                | -         |     6.98 | cronuss, HObbit, interz, lattykk, oz1k |
|           10 |     4483 | 2026-01-20 | GenOne             | W   | 0.508      | -            | -                | -                | -         |     1.21 | cronuss, HObbit, interz, lattykk, oz1k |
|            9 |     4539 | 2026-01-18 | ex-RUBY            | L   | 0.492      | -            | -                | -                | -         |   -13.95 | cronuss, HObbit, interz, lattykk, oz1k |
|            8 |     4572 | 2026-01-17 | Nemesis            | L   | 0.487      | -            | -                | -                | -         |    -7.79 | cronuss, HObbit, interz, lattykk, oz1k |
|            7 |     5440 | 2025-11-23 | FAVBET             | L   | 0.121      | -            | -                | -                | -         |    -3.57 | cronuss, HObbit, interz, lattykk, oz1k |
|            6 |     5454 | 2025-11-23 | ex-RUBY            | W   | 0.119      | -            | -                | -                | -         |     0.34 | cronuss, HObbit, interz, lattykk, oz1k |
|            5 |     5472 | 2025-11-22 | Alliance           | W   | 0.113      | -            | -                | -                | -         |     1.99 | cronuss, HObbit, interz, lattykk, oz1k |
|            4 |     5494 | 2025-11-21 | Venom              | W   | 0.108      | -            | -                | -                | -         |     0.08 | cronuss, HObbit, interz, lattykk, oz1k |
|            3 |     5748 | 2025-11-11 | Nemiga             | L   | 0.041      | -            | -                | -                | -         |    -0.63 | cronuss, HObbit, interz, lattykk, oz1k |
|            2 |     5761 | 2025-11-11 | Nexus              | L   | 0.038      | -            | -                | -                | -         |    -1.11 | cronuss, HObbit, interz, lattykk, oz1k |
|            1 |     5778 | 2025-11-10 | BASEMENT BOYS      | W   | 0.034      | -            | -                | -                | -         |     0.01 | cronuss, HObbit, interz, lattykk, oz1k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,667.39)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $30,000.00     | $30,000.00      |
| 2026-03-27 |      0.947 | $5,000.00      | $4,737.24       |
| 2026-02-15 |      0.680 | $5,000.00      | $3,399.67       |
| 2026-01-30 |      0.574 | $5,000.00      | $2,871.70       |
| 2025-11-23 |      0.121 | $5,000.00      | $603.16         |
| 2025-11-16 |      0.074 | $750.00        | $55.61          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
