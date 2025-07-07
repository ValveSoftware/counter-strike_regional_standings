### Roster Details<br />
Team Name: Betera<br />
Roster: h1te, MaSvAl, synyx, tENZY, Vert<br />
Global Rank: [100](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [65]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  803.3<br />
<br />
Final Rank Value (803.3) = Starting Rank Value (778.9) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.9
- 400 + ( ( 0.203 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 778.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      863 | 2025-05-09 | PARIVISION    | L   | 0.808      | -            | -                | -                | -         |    -5.24 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           17 |      887 | 2025-05-08 | NAVI Junior   | W   | 0.800      | 0.500        | 0.346 (0.138)    | 0.913 (0.365)    | 0 (0.000) |    22.27 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           16 |      912 | 2025-05-07 | B8            | L   | 0.794      | -            | -                | -                | -         |    -1.15 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           15 |     2175 | 2025-03-24 | WildLotus     | L   | 0.500      | -            | -                | -                | -         |   -11.28 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           14 |     2180 | 2025-03-24 | undeRRRated   | W   | 0.499      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.53 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           13 |     2211 | 2025-03-22 | Tricked       | L   | 0.487      | -            | -                | -                | -         |    -4.12 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           12 |     2228 | 2025-03-22 | SkyFury       | W   | 0.486      | 0.143        | 0.000 (0.000)    | 0.028 (0.002)    | 0 (0.000) |     2.92 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           11 |     2301 | 2025-03-19 | Zero Tenacity | W   | 0.468      | 0.500        | 0.014 (0.003)    | 0.839 (0.196)    | 0 (0.000) |     9.80 | h1te, MaSvAl, synyx, tENZY, Vert   |
|           10 |     2348 | 2025-03-18 | Nemiga        | W   | 0.461      | 0.500        | 0.083 (0.019)    | 0.756 (0.174)    | 0 (0.000) |    13.20 | h1te, MaSvAl, synyx, tENZY, Vert   |
|            9 |     2376 | 2025-03-17 | ECSTATIC      | L   | 0.453      | -            | -                | -                | -         |    -0.76 | h1te, MaSvAl, synyx, tENZY, Vert   |
|            8 |     2379 | 2025-03-17 | Insilio       | W   | 0.453      | 0.143        | 0.000 (0.000)    | 0.038 (0.002)    | 0 (0.000) |     2.13 | h1te, MaSvAl, synyx, tENZY, Vert   |
|            7 |     2422 | 2025-03-15 | Kubix         | L   | 0.439      | -            | -                | -                | -         |   -11.34 | h1te, MaSvAl, synyx, tENZY, Vert   |
|            6 |     3034 | 2025-02-25 | Sashi         | W   | 0.321      | 0.500        | 0.012 (0.002)    | 1.000 (0.161)    | 0 (0.000) |     8.30 | h1te, MaSvAl, synyx, tENZY, Vert   |
|            5 |     3067 | 2025-02-24 | 500           | L   | 0.314      | -            | -                | -                | -         |    -3.46 | h1te, MaSvAl, synyx, tENZY, Vert   |
|            4 |     3537 | 2025-02-08 | LFO 3         | L   | 0.207      | -            | -                | -                | -         |    -5.46 | h1te, MaSvAl, synyx, tENZY, Vert   |
|            3 |     3784 | 2025-01-27 | Fire Flux     | W   | 0.128      | 0.500        | 0.003 (0.000)    | 0.578 (0.037)    | 0 (0.000) |     2.27 | h1te, MaSvAl, OWNER, supra, tENZY  |
|            2 |     3868 | 2025-01-23 | Nemiga        | W   | 0.101      | 0.500        | 0.083 (0.004)    | 0.756 (0.038)    | 0 (0.000) |     2.95 | MaSvAl, OWNER, supra, synyx, tENZY |
|            1 |     3936 | 2025-01-21 | CYBERSHOKE    | W   | 0.087      | 0.500        | 0.010 (0.000)    | 0.970 (0.042)    | 0 (0.000) |     1.86 | h1te, MaSvAl, OWNER, supra, tENZY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,978.79)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.821 | $8,500.00      | $6,978.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
