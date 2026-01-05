### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, NAF, NertZ, siuhy, ultimate<br />
Global Rank: [13](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [10]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1620.1<br />
<br />
Final Rank Value (1620.1) = Starting Rank Value (1681.5) + Head To Head Adjustments (-61.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.795[<sup>1</sup>](#table2)
- Bounty Collected: 0.676[<sup>2</sup>](#table1)
- Opponent Network: 0.294[<sup>2</sup>](#table1)
- LAN Wins: 0.819[<sup>2</sup>](#table1)

The average of these factors is 0.646<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1681.5
- 400 + ( ( 0.646 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1681.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      372 | 2025-12-05 | Passion UA  | L   | 0.994      | -            | -                | -                | -         |   -19.93 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           44 |      393 | 2025-12-04 | The MongolZ | L   | 0.988      | -            | -                | -                | -         |   -10.59 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           43 |      407 | 2025-12-04 | Spirit      | L   | 0.986      | -            | -                | -                | -         |    -9.31 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           42 |      433 | 2025-12-02 | Astralis    | W   | 0.974      | 0.809        | 0.375 (0.295)    | 0.334 (0.263)    | 1 (0.974) |    13.00 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           41 |      448 | 2025-12-01 | TYLOO       | W   | 0.968      | 0.809        | 0.170 (0.133)    | -                | 1 (0.968) |     2.20 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           40 |      465 | 2025-11-30 | MIBR        | W   | 0.961      | 0.809        | -                | 0.272 (0.211)    | 1 (0.961) |     2.35 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           39 |      498 | 2025-11-29 | PARIVISION  | L   | 0.955      | -            | -                | -                | -         |   -19.15 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           38 |      518 | 2025-11-29 | B8          | L   | 0.953      | -            | -                | -                | -         |   -14.08 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           37 |     1393 | 2025-10-31 | SAW         | L   | 0.759      | -            | -                | -                | -         |   -14.48 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           36 |     1434 | 2025-10-29 | FlyQuest    | W   | 0.746      | -            | -                | -                | 1 (0.746) |     2.93 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           35 |     1472 | 2025-10-28 | BetBoom     | W   | 0.738      | 1.000        | 0.229 (0.169)    | 0.933 (0.689)    | 1 (0.738) |     5.64 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           34 |     1499 | 2025-10-27 | Aurora      | L   | 0.733      | -            | -                | -                | -         |    -8.89 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           33 |     1569 | 2025-10-26 | Legacy      | W   | 0.725      | 1.000        | 1.000 (0.725)    | 0.436 (0.316)    | 1 (0.725) |    12.80 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           32 |     1796 | 2025-10-18 | HEROIC      | W   | 0.677      | 1.000        | 0.362 (0.245)    | 0.340 (0.230)    | 1 (0.677) |     7.12 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           31 |     1819 | 2025-10-18 | 3DMAX       | L   | 0.671      | -            | -                | -                | -         |    -9.60 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           30 |     1882 | 2025-10-16 | Legacy      | W   | 0.658      | 1.000        | 1.000 (0.658)    | 0.436 (0.287)    | 1 (0.658) |    11.60 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           29 |     1941 | 2025-10-14 | MIBR        | W   | 0.646      | -            | -                | -                | 1 (0.646) |     1.69 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           28 |     1952 | 2025-10-13 | GamerLegion | W   | 0.643      | 1.000        | 0.239 (0.154)    | 0.463 (0.298)    | 1 (0.643) |     6.95 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           27 |     2574 | 2025-09-28 | Partizan    | W   | 0.540      | -            | -                | -                | -         |     0.33 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           26 |     2586 | 2025-09-28 | 9INE        | L   | 0.539      | -            | -                | -                | -         |   -13.38 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           25 |     2600 | 2025-09-28 | 500         | W   | 0.538      | 0.354        | -                | 1.000 (0.191)    | -         |     0.51 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           24 |     2638 | 2025-09-27 | ENCE        | W   | 0.533      | -            | -                | -                | -         |     2.57 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           23 |     2649 | 2025-09-27 | 9INE        | L   | 0.532      | -            | -                | -                | -         |   -13.62 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           22 |     2654 | 2025-09-27 | 500         | W   | 0.532      | 0.354        | -                | 1.000 (0.188)    | -         |     0.43 | EliGE, NAF, NertZ, siuhy, ultimate   |
|           21 |     2859 | 2025-09-20 | The MongolZ | L   | 0.486      | -            | -                | -                | -         |    -4.03 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           20 |     2892 | 2025-09-19 | Aurora      | W   | 0.479      | 1.000        | 1.000 (0.479)    | -                | -         |    10.13 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           19 |     2971 | 2025-09-17 | FaZe        | W   | 0.465      | 1.000        | 0.634 (0.295)    | 0.579 (0.269)    | -         |    11.09 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           18 |     2984 | 2025-09-16 | TYLOO       | W   | 0.460      | -            | -                | -                | -         |     0.85 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           17 |     3013 | 2025-09-15 | HEROIC      | W   | 0.453      | 1.000        | 0.362 (0.164)    | -                | -         |     4.88 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           16 |     3050 | 2025-09-14 | GamerLegion | L   | 0.446      | -            | -                | -                | -         |    -9.52 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           15 |     3083 | 2025-09-13 | FURIA       | L   | 0.441      | -            | -                | -                | -         |    -2.35 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           14 |     3487 | 2025-08-31 | Spirit      | L   | 0.354      | -            | -                | -                | -         |    -3.39 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           13 |     3522 | 2025-08-30 | Imperial    | W   | 0.346      | -            | -                | -                | -         |     3.55 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           12 |     3590 | 2025-08-28 | G2          | L   | 0.333      | -            | -                | -                | -         |    -6.27 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           11 |     3748 | 2025-08-20 | Vitality    | L   | 0.280      | -            | -                | -                | -         |    -1.28 | NAF, NertZ, siuhy, Twistzz, ultimate |
|           10 |     3904 | 2025-08-15 | Vitality    | L   | 0.247      | -            | -                | -                | -         |    -1.11 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            9 |     4156 | 2025-08-09 | FURIA       | W   | 0.208      | -            | -                | -                | -         |     5.46 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            8 |     4226 | 2025-08-05 | ECSTATIC    | W   | 0.180      | -            | -                | -                | -         |     0.89 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            7 |     4290 | 2025-08-01 | VP.Prodigy  | L   | 0.152      | -            | -                | -                | -         |    -4.76 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            6 |     4345 | 2025-07-28 | FaZe        | L   | 0.126      | -            | -                | -                | -         |    -0.89 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            5 |     4383 | 2025-07-27 | MOUZ        | L   | 0.119      | -            | -                | -                | -         |    -1.34 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            4 |     4421 | 2025-07-25 | FlyQuest    | W   | 0.107      | -            | -                | -                | -         |     0.39 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            3 |     4432 | 2025-07-24 | FaZe        | L   | 0.101      | -            | -                | -                | -         |    -0.71 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            2 |     4443 | 2025-07-23 | paiN        | W   | 0.094      | -            | -                | -                | -         |     0.93 | NAF, NertZ, siuhy, Twistzz, ultimate |
|            1 |     4623 | 2025-07-14 | Sashi       | L   | 0.034      | -            | -                | -                | -         |    -0.95 | NAF, NertZ, siuhy, Twistzz, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($236,725.98)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.55) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-11-01 |      0.767 | $62,500.00     | $47,942.61      |
| 2025-10-19 |      0.679 | $130,000.00    | $88,213.19      |
| 2025-09-28 |      0.541 | $1,700.00      | $919.20         |
| 2025-09-21 |      0.494 | $130,000.00    | $64,278.29      |
| 2025-09-01 |      0.361 | $7,500.00      | $2,711.03       |
| 2025-08-24 |      0.306 | $20,000.00     | $6,114.45       |
| 2025-08-17 |      0.260 | $18,750.00     | $4,877.20       |
| 2025-08-03 |      0.167 | $10,000.00     | $1,670.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
