### Roster Details<br />
Team Name: SPARTA<br />
Roster: El1an, Forester, Lack1, NickelBack, TRAVIS<br />
Global Rank: [78](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [54]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1189.9<br />
<br />
Final Rank Value (1189.9) = Starting Rank Value (1393.9) + Head To Head Adjustments (-204.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.455[<sup>1</sup>](#table2)
- Bounty Collected: 0.393[<sup>2</sup>](#table1)
- Opponent Network: 0.311[<sup>2</sup>](#table1)
- LAN Wins: 0.873[<sup>2</sup>](#table1)

The average of these factors is 0.508<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1393.9
- 400 + ( ( 0.508 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1393.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      124 | 2026-04-02 | CYBERSHOKE Prospects | L   | 1.000      | -            | -                | -                | -         |   -28.95 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           54 |      127 | 2026-04-02 | TDK                  | L   | 1.000      | -            | -                | -                | -         |   -13.18 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           53 |      145 | 2026-04-02 | CYBERSHOKE Prospects | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.01 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           52 |      566 | 2026-03-25 | WW                   | L   | 1.000      | -            | -                | -                | -         |   -15.60 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           51 |      964 | 2026-03-18 | CSDIILIT             | L   | 1.000      | -            | -                | -                | -         |   -28.98 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           50 |     1029 | 2026-03-16 | aAa                  | L   | 1.000      | -            | -                | -                | -         |   -27.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           49 |     1525 | 2026-03-06 | WW                   | L   | 0.995      | -            | -                | -                | -         |   -21.52 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           48 |     1532 | 2026-03-06 | VP.Prodigy           | W   | 0.994      | -            | -                | -                | 1 (0.994) |     6.97 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           47 |     1544 | 2026-03-06 | 1win                 | W   | 0.993      | 0.333        | 0.098 (0.032)    | -                | 1 (0.993) |    16.58 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           46 |     1555 | 2026-03-05 | TDK                  | W   | 0.990      | 0.333        | 0.049 (0.016)    | 0.706 (0.233)    | 1 (0.990) |    15.77 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           45 |     1569 | 2026-03-05 | VP.Prodigy           | L   | 0.988      | -            | -                | -                | -         |   -24.16 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           44 |     1667 | 2026-03-03 | Younglings           | W   | 0.976      | -            | -                | -                | 1 (0.976) |     0.27 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           43 |     1688 | 2026-03-03 | Nuclear TigeRES      | L   | 0.974      | -            | -                | -                | -         |   -15.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           42 |     1699 | 2026-03-03 | 5Actors              | W   | 0.973      | -            | -                | -                | 1 (0.973) |     0.30 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           41 |     1747 | 2026-03-02 | HOTU                 | L   | 0.966      | -            | -                | -                | -         |   -12.09 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           40 |     1830 | 2026-02-28 | MOUZ NXT             | W   | 0.953      | 0.435        | 0.037 (0.015)    | 1.000 (0.414)    | -         |     8.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           39 |     1853 | 2026-02-27 | TDK                  | W   | 0.948      | 0.435        | 0.049 (0.020)    | 0.706 (0.291)    | -         |    15.55 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           38 |     1866 | 2026-02-27 | SINNERS              | W   | 0.947      | 0.435        | 0.178 (0.073)    | 0.675 (0.278)    | -         |    21.86 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           37 |     1926 | 2026-02-26 | BASEMENT BOYS        | W   | 0.940      | -            | -                | -                | -         |     2.23 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           36 |     1937 | 2026-02-26 | Alliance             | W   | 0.940      | 0.435        | 0.101 (0.041)    | 0.964 (0.394)    | -         |    21.89 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           35 |     2024 | 2026-02-24 | Leo                  | L   | 0.927      | -            | -                | -                | -         |   -25.00 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           34 |     2028 | 2026-02-24 | magic                | W   | 0.927      | 0.435        | 0.085 (0.034)    | 0.770 (0.310)    | -         |    14.57 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           33 |     2091 | 2026-02-23 | CSDIILIT             | W   | 0.918      | 0.435        | -                | 0.654 (0.261)    | -         |     2.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           32 |     2105 | 2026-02-22 | TNC                  | W   | 0.915      | 0.435        | 0.025 (0.010)    | 1.000 (0.398)    | -         |     8.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           31 |     2264 | 2026-02-20 | ex-RUBY              | L   | 0.899      | -            | -                | -                | -         |   -18.06 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           30 |     2282 | 2026-02-19 | Omega                | W   | 0.895      | 0.435        | -                | 0.588 (0.229)    | -         |     8.98 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           29 |     2299 | 2026-02-19 | TNC                  | L   | 0.893      | -            | -                | -                | -         |   -21.18 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           28 |     2342 | 2026-02-18 | HAVU                 | W   | 0.887      | -            | -                | -                | -         |     6.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           27 |     2395 | 2026-02-17 | ex-Zero Tenacity     | W   | 0.881      | -            | -                | -                | -         |     1.54 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           26 |     2416 | 2026-02-17 | Inner Circle         | W   | 0.880      | 0.435        | 0.060 (0.023)    | -                | -         |     9.83 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           25 |     2461 | 2026-02-16 | Fuzos                | W   | 0.873      | -            | -                | -                | -         |     2.82 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           24 |     2471 | 2026-02-16 | ARCRED               | L   | 0.872      | -            | -                | -                | -         |   -13.78 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           23 |     2496 | 2026-02-15 | Lazer Cats           | W   | 0.868      | -            | -                | -                | -         |     4.77 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           22 |     2506 | 2026-02-15 | Hashiras             | L   | 0.867      | -            | -                | -                | -         |   -24.92 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           21 |     2528 | 2026-02-15 | MASONIC              | W   | 0.866      | -            | -                | -                | -         |     0.17 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           20 |     2577 | 2026-02-14 | Oxuji                | L   | 0.860      | -            | -                | -                | -         |   -22.60 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           19 |     2594 | 2026-02-14 | K27                  | L   | 0.859      | -            | -                | -                | -         |    -7.96 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           18 |     2615 | 2026-02-13 | UNiTY                | L   | 0.855      | -            | -                | -                | -         |   -24.48 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           17 |     2676 | 2026-02-12 | Leo                  | W   | 0.847      | -            | -                | -                | -         |     2.01 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           16 |     2743 | 2026-02-10 | GenOne               | W   | 0.834      | -            | -                | -                | -         |     4.56 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           15 |     2778 | 2026-02-09 | Phantom              | L   | 0.826      | -            | -                | -                | -         |   -17.90 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           14 |     2826 | 2026-02-07 | Rebels               | W   | 0.814      | -            | -                | -                | -         |     6.76 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           13 |     2888 | 2026-02-05 | TNC                  | W   | 0.801      | 0.384        | -                | 1.000 (0.308)    | -         |     3.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           12 |     2909 | 2026-02-04 | Fuzos                | W   | 0.795      | -            | -                | -                | -         |     1.79 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           11 |     2950 | 2026-02-03 | Nuclear TigeRES      | L   | 0.786      | -            | -                | -                | -         |   -12.31 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           10 |     2974 | 2026-02-02 | RUSTEC               | W   | 0.780      | -            | -                | -                | 1 (0.780) |     0.46 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            9 |     2987 | 2026-02-02 | ARCRED               | L   | 0.779      | -            | -                | -                | -         |   -15.57 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            8 |     3027 | 2026-01-31 | FORZE Reload         | W   | 0.769      | -            | -                | -                | 1 (0.769) |     2.13 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            7 |     3046 | 2026-01-31 | K27                  | L   | 0.767      | -            | -                | -                | -         |    -8.43 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            6 |     3055 | 2026-01-31 | FORZE Reload         | W   | 0.766      | -            | -                | -                | 1 (0.766) |     2.02 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            5 |     3784 | 2025-12-21 | K27                  | L   | 0.493      | -            | -                | -                | -         |    -5.16 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            4 |     3793 | 2025-12-21 | Oxuji                | W   | 0.492      | -            | -                | -                | 1 (0.492) |     2.22 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            3 |     3962 | 2025-12-09 | K27                  | L   | 0.414      | -            | -                | -                | -         |    -4.45 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            2 |     3968 | 2025-12-09 | ALLINNERS            | W   | 0.413      | -            | -                | -                | -         |     0.62 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            1 |     3988 | 2025-12-08 | Nemiga               | W   | 0.406      | 0.377        | 0.138 (0.021)    | -                | -         |     6.83 | El1an, Forester, Lack1, NickelBack, sugaR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,028.12)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-06 |      0.995 | $1,500.00      | $1,493.21       |
| 2026-02-27 |      0.948 | $22,000.00     | $20,855.90      |
| 2026-02-20 |      0.901 | $2,000.00      | $1,801.97       |
| 2025-12-21 |      0.493 | $9,887.00      | $4,877.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
