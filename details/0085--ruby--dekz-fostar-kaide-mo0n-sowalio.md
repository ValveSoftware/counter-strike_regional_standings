### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, fostar, Kaide, mo0N, sowalio<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [85](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  921.4<br />
<br />
Final Rank Value (921.4) = Starting Rank Value (958.6) + Head To Head Adjustments (-37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.185[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.6
- 400 + ( ( 0.276 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 958.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |       48 | 2024-07-23 | Metizport       | W   | 1.000      | 0.435        | 0.051 (0.022)    | 0.460 (0.200)    | 0 (0.000) |    17.80 | dekz, fostar, Kaide, mo0N, sowalio |
|           48 |      142 | 2024-07-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |    -9.56 | dekz, fostar, Kaide, mo0N, sowalio |
|           47 |      300 | 2024-07-17 | VP.Prodigy      | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.462 (0.201)    | 0 (0.000) |    13.83 | dekz, fostar, Kaide, mo0N, sowalio |
|           46 |      344 | 2024-07-16 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -15.66 | dekz, fostar, Kaide, mo0N, sowalio |
|           45 |      611 | 2024-06-16 | ARCRED          | W   | 0.946      | 0.450        | 0.048 (0.021)    | 0.329 (0.140)    | 0 (0.000) |    16.88 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           44 |      633 | 2024-06-15 | System5         | L   | 0.940      | -            | -                | -                | -         |   -22.87 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           43 |      645 | 2024-06-15 | Spirit Academy  | W   | 0.939      | 0.450        | 0.017 (0.007)    | -                | 0 (0.000) |     8.52 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           42 |      677 | 2024-06-14 | Zero Tenacity   | L   | 0.933      | -            | -                | -                | -         |    -8.46 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           41 |      685 | 2024-06-14 | LEON            | W   | 0.932      | -            | -                | -                | 0 (0.000) |     6.65 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           40 |      828 | 2024-06-09 | Insilio         | L   | 0.900      | -            | -                | -                | -         |   -11.41 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           39 |      973 | 2024-06-07 | SINNERS         | L   | 0.885      | -            | -                | -                | -         |   -11.84 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           38 |     1082 | 2024-06-05 | ARCRED          | L   | 0.873      | -            | -                | -                | -         |   -14.87 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           37 |     1100 | 2024-06-05 | Rare Atom       | L   | 0.871      | -            | -                | -                | -         |   -23.45 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           36 |     1151 | 2024-06-03 | Insilio         | W   | 0.861      | 0.372        | 0.030 (0.009)    | 0.582 (0.187)    | 0 (0.000) |    13.49 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           35 |     1160 | 2024-06-03 | HAVU            | L   | 0.859      | -            | -                | -                | -         |   -21.35 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           34 |     1196 | 2024-06-01 | Zero Tenacity   | W   | 0.847      | 0.372        | 0.173 (0.055)    | 1.000 (0.315)    | 0 (0.000) |    18.55 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           33 |     1260 | 2024-05-30 | Portugal        | W   | 0.834      | -            | -                | -                | 0 (0.000) |     5.04 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           32 |     1270 | 2024-05-30 | FURIA           | L   | 0.832      | -            | -                | -                | -         |    -0.56 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           31 |     1314 | 2024-05-28 | MOUZ NXT        | L   | 0.820      | -            | -                | -                | -         |    -9.30 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           30 |     1354 | 2024-05-26 | Zero Tenacity   | L   | 0.805      | -            | -                | -                | -         |    -8.22 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           29 |     1365 | 2024-05-25 | B8              | L   | 0.801      | -            | -                | -                | -         |    -6.04 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           28 |     1405 | 2024-05-23 | Nexus           | W   | 0.786      | 0.435        | 0.018 (0.006)    | 0.480 (0.164)    | 0 (0.000) |     6.79 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           27 |     1495 | 2024-05-21 | Endpoint        | W   | 0.771      | 0.435        | -                | 0.466 (0.156)    | 0 (0.000) |    10.78 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           26 |     1834 | 2024-05-11 | 9 Pandas        | L   | 0.706      | -            | -                | -                | -         |    -8.91 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           25 |     1860 | 2024-05-10 | Nemiga          | W   | 0.698      | 0.435        | 0.415 (0.126)    | 0.707 (0.215)    | -         |    17.21 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           24 |     1917 | 2024-05-07 | Insilio         | W   | 0.680      | 0.435        | 0.030 (0.009)    | 0.582 (0.172)    | -         |    10.73 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           23 |     1960 | 2024-05-05 | HAVU            | W   | 0.665      | -            | -                | -                | -         |     4.59 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           22 |     1992 | 2024-05-03 | V1dar           | W   | 0.652      | -            | -                | -                | -         |     1.98 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           21 |     2047 | 2024-05-01 | GL Academy      | L   | 0.638      | -            | -                | -                | -         |   -14.72 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           20 |     2089 | 2024-04-29 | Permitta        | L   | 0.625      | -            | -                | -                | -         |   -10.21 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           19 |     2120 | 2024-04-27 | Astralis Talent | W   | 0.613      | -            | -                | -                | -         |     0.78 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           18 |     2282 | 2024-04-20 | Zero Tenacity   | L   | 0.566      | -            | -                | -                | -         |    -6.77 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           17 |     2362 | 2024-04-18 | Sashi           | L   | 0.553      | -            | -                | -                | -         |    -5.30 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           16 |     2371 | 2024-04-18 | Aurora          | W   | 0.553      | 0.143        | 0.423 (0.033)    | -                | -         |    16.86 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           15 |     2378 | 2024-04-18 | NOM             | W   | 0.552      | -            | -                | -                | -         |     1.56 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           14 |     2425 | 2024-04-17 | JANO            | W   | 0.544      | -            | -                | -                | -         |     3.15 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           13 |     3069 | 2024-03-19 | Sashi           | L   | 0.354      | -            | -                | -                | -         |    -3.09 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           12 |     3126 | 2024-03-16 | Permitta        | W   | 0.333      | 0.372        | -                | 0.790 (0.098)    | -         |     5.43 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           11 |     3262 | 2024-03-11 | Nexus           | L   | 0.300      | -            | -                | -                | -         |    -6.09 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           10 |     3298 | 2024-03-09 | Spirit Academy  | W   | 0.287      | -            | -                | -                | -         |     0.92 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            9 |     3325 | 2024-03-08 | ARCRED          | W   | 0.280      | -            | -                | -                | -         |     3.25 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            8 |     3555 | 2024-02-27 | Spirit Academy  | L   | 0.214      | -            | -                | -                | -         |    -6.11 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            7 |     3559 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.213      | -            | -                | -                | -         |     3.85 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            6 |     3960 | 2024-02-09 | FORZE           | L   | 0.093      | -            | -                | -                | -         |    -1.62 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            5 |     3974 | 2024-02-08 | AMKAL           | L   | 0.087      | -            | -                | -                | -         |    -0.85 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            4 |     3976 | 2024-02-08 | ex-Guild Eagles | W   | 0.086      | -            | -                | -                | -         |     0.94 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            3 |     4144 | 2024-01-30 | Nemiga          | L   | 0.027      | -            | -                | -                | -         |    -0.18 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            2 |     4149 | 2024-01-30 | Permitta        | W   | 0.027      | -            | -                | -                | -         |     0.40 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            1 |     4156 | 2024-01-30 | Kosovo          | W   | 0.026      | -            | -                | -                | -         |     0.28 | dekz, Kaide, mo0N, sowalio, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,582.80)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $30,000.00     | $28,374.84      |
| 2024-06-10 |      0.907 | $3,300.00      | $2,994.51       |
| 2024-05-12 |      0.713 | $2,000.00      | $1,426.92       |
| 2024-03-25 |      0.393 | $2,000.00      | $786.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
