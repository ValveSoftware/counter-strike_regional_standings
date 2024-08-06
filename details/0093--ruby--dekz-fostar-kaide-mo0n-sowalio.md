### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, fostar, Kaide, mo0N, sowalio<br />
Global Rank: [93](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
<br />
Final Rank Value:  890.6<br />
<br />
Final Rank Value (890.6) = Starting Rank Value (933.4) + Head To Head Adjustments (-42.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.168[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 933.4
- 400 + ( ( 0.259 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 933.4


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
|           47 |       75 | 2024-08-04 | Project G       | L   | 1.000      | -            | -                | -                | -         |   -27.72 | dekz, fostar, Kaide, mo0N, sowalio |
|           46 |      417 | 2024-07-25 | 9z              | L   | 1.000      | -            | -                | -                | -         |    -1.34 | dekz, fostar, Kaide, mo0N, sowalio |
|           45 |      498 | 2024-07-23 | Metizport       | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.510 (0.222)    | 0 (0.000) |    17.41 | dekz, fostar, Kaide, mo0N, sowalio |
|           44 |      592 | 2024-07-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |    -8.98 | dekz, fostar, Kaide, mo0N, sowalio |
|           43 |      750 | 2024-07-17 | VP.Prodigy      | W   | 1.000      | 0.435        | 0.025 (0.011)    | 0.383 (0.166)    | 0 (0.000) |    14.49 | dekz, fostar, Kaide, mo0N, sowalio |
|           42 |      794 | 2024-07-16 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -15.21 | dekz, fostar, Kaide, mo0N, sowalio |
|           41 |     1061 | 2024-06-16 | ARCRED          | W   | 0.859      | 0.450        | 0.041 (0.016)    | 0.369 (0.143)    | 0 (0.000) |    16.57 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           40 |     1083 | 2024-06-15 | System5         | L   | 0.854      | -            | -                | -                | -         |   -21.00 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           39 |     1095 | 2024-06-15 | Spirit Academy  | W   | 0.853      | 0.450        | 0.013 (0.005)    | -                | 0 (0.000) |     7.75 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           38 |     1127 | 2024-06-14 | Zero Tenacity   | L   | 0.847      | -            | -                | -                | -         |    -7.27 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           37 |     1135 | 2024-06-14 | LEON            | W   | 0.846      | -            | -                | -                | 0 (0.000) |     6.09 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           36 |     1278 | 2024-06-09 | Insilio         | L   | 0.813      | -            | -                | -                | -         |   -10.69 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           35 |     1423 | 2024-06-07 | SINNERS         | L   | 0.798      | -            | -                | -                | -         |    -9.04 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           34 |     1532 | 2024-06-05 | ARCRED          | L   | 0.786      | -            | -                | -                | -         |   -11.74 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           33 |     1550 | 2024-06-05 | Rare Atom       | L   | 0.785      | -            | -                | -                | -         |   -16.23 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           32 |     1601 | 2024-06-03 | Insilio         | W   | 0.774      | 0.372        | 0.023 (0.007)    | 0.539 (0.155)    | 0 (0.000) |    12.21 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           31 |     1610 | 2024-06-03 | HAVU            | L   | 0.773      | -            | -                | -                | -         |   -19.23 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           30 |     1646 | 2024-06-01 | Zero Tenacity   | W   | 0.761      | 0.372        | 0.143 (0.040)    | 1.000 (0.283)    | 0 (0.000) |    17.36 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           29 |     1710 | 2024-05-30 | Portugal        | W   | 0.747      | -            | -                | -                | 0 (0.000) |     4.39 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           28 |     1720 | 2024-05-30 | FURIA           | L   | 0.746      | -            | -                | -                | -         |    -0.59 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           27 |     1764 | 2024-05-28 | MOUZ NXT        | L   | 0.733      | -            | -                | -                | -         |    -7.63 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           26 |     1804 | 2024-05-26 | Zero Tenacity   | L   | 0.719      | -            | -                | -                | -         |    -6.58 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           25 |     1815 | 2024-05-25 | B8              | L   | 0.714      | -            | -                | -                | -         |    -5.16 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           24 |     1855 | 2024-05-23 | Nexus           | W   | 0.700      | 0.435        | 0.014 (0.004)    | 0.447 (0.136)    | 0 (0.000) |     6.46 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           23 |     1945 | 2024-05-21 | Endpoint        | W   | 0.685      | 0.435        | -                | 0.540 (0.161)    | 0 (0.000) |    10.16 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           22 |     2284 | 2024-05-11 | 9 Pandas        | L   | 0.620      | -            | -                | -                | -         |    -7.97 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           21 |     2310 | 2024-05-10 | Nemiga          | W   | 0.612      | 0.435        | 0.314 (0.083)    | 0.704 (0.187)    | -         |    15.07 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           20 |     2367 | 2024-05-07 | Insilio         | W   | 0.593      | 0.435        | 0.023 (0.006)    | 0.539 (0.139)    | -         |     9.44 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           19 |     2410 | 2024-05-05 | HAVU            | W   | 0.579      | -            | -                | -                | -         |     4.02 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           18 |     2442 | 2024-05-03 | V1dar           | W   | 0.565      | -            | -                | -                | -         |     1.78 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           17 |     2497 | 2024-05-01 | GL Academy      | L   | 0.551      | -            | -                | -                | -         |   -12.72 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           16 |     2539 | 2024-04-29 | Permitta        | L   | 0.538      | -            | -                | -                | -         |    -7.78 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           15 |     2570 | 2024-04-27 | Astralis Talent | W   | 0.527      | -            | -                | -                | -         |     0.75 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           14 |     2732 | 2024-04-20 | Zero Tenacity   | L   | 0.479      | -            | -                | -                | -         |    -5.05 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           13 |     2812 | 2024-04-18 | Sashi           | L   | 0.467      | -            | -                | -                | -         |    -4.02 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           12 |     2821 | 2024-04-18 | Aurora          | W   | 0.466      | 0.143        | 0.420 (0.028)    | -                | -         |    14.41 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           11 |     2828 | 2024-04-18 | NOM             | W   | 0.466      | -            | -                | -                | -         |     1.55 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           10 |     2875 | 2024-04-17 | JANO            | W   | 0.458      | -            | -                | -                | -         |     2.83 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            9 |     3519 | 2024-03-19 | Sashi           | L   | 0.267      | -            | -                | -                | -         |    -2.07 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            8 |     3576 | 2024-03-16 | Permitta        | W   | 0.247      | 0.372        | -                | 0.919 (0.084)    | -         |     4.59 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            7 |     3712 | 2024-03-11 | Nexus           | L   | 0.213      | -            | -                | -                | -         |    -4.24 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            6 |     3748 | 2024-03-09 | Spirit Academy  | W   | 0.201      | -            | -                | -                | -         |     0.67 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            5 |     3775 | 2024-03-08 | ARCRED          | W   | 0.194      | -            | -                | -                | -         |     2.89 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            4 |     4005 | 2024-02-27 | Spirit Academy  | L   | 0.127      | -            | -                | -                | -         |    -3.61 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            3 |     4009 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.127      | -            | -                | -                | -         |     2.28 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            2 |     4410 | 2024-02-09 | FORZE           | L   | 0.007      | -            | -                | -                | -         |    -0.12 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            1 |     4424 | 2024-02-08 | AMKAL           | L   | 0.001      | -            | -                | -                | -         |    -0.00 | dekz, Kaide, mo0N, sowalio, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,358.14)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.859 | $30,000.00     | $25,781.28      |
| 2024-06-10 |      0.821 | $3,300.00      | $2,709.22       |
| 2024-05-12 |      0.627 | $2,000.00      | $1,254.02       |
| 2024-03-25 |      0.307 | $2,000.00      | $613.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
