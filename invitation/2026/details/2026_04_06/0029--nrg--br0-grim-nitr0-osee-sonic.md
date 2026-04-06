### Roster Details<br />
Team Name: NRG<br />
Roster: br0, Grim, nitr0, oSee, Sonic<br />
Global Rank: [29](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [6]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  1411.9<br />
<br />
Final Rank Value (1411.9) = Starting Rank Value (1321.2) + Head To Head Adjustments (90.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.468[<sup>2</sup>](#table1)
- Opponent Network: 0.227[<sup>2</sup>](#table1)
- LAN Wins: 0.674[<sup>2</sup>](#table1)

The average of these factors is 0.471<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1321.2
- 400 + ( ( 0.471 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1321.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      753 | 2026-03-22 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -3.32 | br0, Grim, nitr0, oSee, Sonic    |
|           30 |      877 | 2026-03-20 | B8                | W   | 1.000      | 1.000        | 0.186 (0.186)    | 0.349 (0.349)    | 1 (1.000) |    21.29 | br0, Grim, nitr0, oSee, Sonic    |
|           29 |      969 | 2026-03-18 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -3.42 | br0, Grim, nitr0, oSee, Sonic    |
|           28 |     1666 | 2026-03-03 | Ninjas in Pyjamas | L   | 0.976      | -            | -                | -                | -         |   -14.90 | br0, Grim, nitr0, oSee, Sonic    |
|           27 |     1745 | 2026-03-02 | Monte             | L   | 0.966      | -            | -                | -                | -         |   -10.35 | br0, Grim, nitr0, oSee, Sonic    |
|           26 |     1788 | 2026-03-01 | HEROIC            | L   | 0.959      | -            | -                | -                | -         |    -9.37 | br0, Grim, nitr0, oSee, Sonic    |
|           25 |     2795 | 2026-02-08 | Passion UA        | W   | 0.821      | 0.769        | 0.069 (0.044)    | 0.462 (0.291)    | -         |    11.31 | br0, Jeorge, nitr0, oSee, Sonic  |
|           24 |     2820 | 2026-02-07 | Voca              | W   | 0.815      | 0.769        | 0.044 (0.028)    | 0.701 (0.439)    | -         |     9.73 | br0, Jeorge, nitr0, oSee, Sonic  |
|           23 |     2863 | 2026-02-06 | Fisher College    | W   | 0.807      | 0.769        | 0.024 (0.015)    | 0.385 (0.239)    | -         |     1.95 | br0, Jeorge, nitr0, oSee, Sonic  |
|           22 |     2972 | 2026-02-02 | Falcons           | L   | 0.781      | -            | -                | -                | -         |    -3.14 | br0, Jeorge, nitr0, oSee, Sonic  |
|           21 |     3009 | 2026-02-01 | MOUZ              | L   | 0.773      | -            | -                | -                | -         |    -3.11 | br0, Jeorge, nitr0, oSee, Sonic  |
|           20 |     3080 | 2026-01-30 | Astralis          | W   | 0.760      | 0.783        | 0.464 (0.276)    | 0.337 (0.200)    | 1 (0.760) |    18.87 | br0, Jeorge, nitr0, oSee, Sonic  |
|           19 |     3129 | 2026-01-28 | B8                | W   | 0.747      | 0.783        | 0.186 (0.109)    | 0.349 (0.204)    | 1 (0.747) |    17.62 | br0, Jeorge, nitr0, oSee, Sonic  |
|           18 |     3645 | 2026-01-11 | M80               | L   | 0.636      | -            | -                | -                | -         |    -7.78 | br0, Jeorge, nitr0, oSee, Sonic  |
|           17 |     3646 | 2026-01-11 | Marsborne         | W   | 0.636      | 0.396        | 0.038 (0.009)    | 0.491 (0.124)    | 1 (0.636) |     6.03 | br0, Jeorge, nitr0, oSee, Sonic  |
|           16 |     3658 | 2026-01-10 | Voca              | W   | 0.628      | 0.396        | 0.044 (0.011)    | 0.701 (0.174)    | 1 (0.628) |     8.75 | br0, Jeorge, nitr0, oSee, Sonic  |
|           15 |     3667 | 2026-01-09 | Outfit 49         | W   | 0.623      | -            | -                | -                | 1 (0.623) |     0.43 | br0, Jeorge, nitr0, oSee, Sonic  |
|           14 |     3686 | 2026-01-04 | 9INE              | W   | 0.591      | 0.323        | 0.053 (0.010)    | 0.606 (0.116)    | 1 (0.591) |     9.05 | br0, Jeorge, nitr0, oSee, Sonic  |
|           13 |     3689 | 2026-01-04 | GamerLegion       | W   | 0.588      | 0.323        | 0.204 (0.039)    | -                | 1 (0.588) |    13.41 | br0, Jeorge, nitr0, oSee, Sonic  |
|           12 |     3702 | 2026-01-04 | Voca              | W   | 0.587      | 0.323        | -                | 0.701 (0.133)    | 1 (0.587) |     9.22 | br0, Jeorge, nitr0, oSee, Sonic  |
|           11 |     3741 | 2026-01-03 | Marsborne         | W   | 0.581      | -            | -                | -                | 1 (0.581) |     7.26 | br0, Jeorge, nitr0, oSee, Sonic  |
|           10 |     3749 | 2026-01-03 | EMPIRE            | W   | 0.580      | -            | -                | -                | -         |     0.52 | br0, Jeorge, nitr0, oSee, Sonic  |
|            9 |     4434 | 2025-11-20 | Rave              | W   | 0.290      | -            | -                | -                | -         |     0.51 | br0, Jeorge, nitr0, Sonic, XotiC |
|            8 |     4693 | 2025-11-09 | M80               | W   | 0.217      | -            | -                | -                | -         |     4.61 | br0, Jeorge, nitr0, Sonic, XotiC |
|            7 |     4699 | 2025-11-09 | BC.Game           | W   | 0.215      | -            | -                | -                | -         |     3.52 | br0, Jeorge, nitr0, Sonic, XotiC |
|            6 |     4711 | 2025-11-09 | FRZ               | W   | 0.213      | -            | -                | -                | -         |     0.06 | br0, Jeorge, nitr0, Sonic, XotiC |
|            5 |     4732 | 2025-11-08 | Reign Above       | W   | 0.209      | -            | -                | -                | -         |     0.10 | br0, Jeorge, nitr0, Sonic, XotiC |
|            4 |     4737 | 2025-11-08 | Outfit 49         | W   | 0.209      | -            | -                | -                | -         |     0.06 | br0, Jeorge, nitr0, Sonic, XotiC |
|            3 |     5206 | 2025-10-26 | Marsborne         | W   | 0.123      | -            | -                | -                | -         |     1.69 | br0, Jeorge, nitr0, Sonic, XotiC |
|            2 |     5234 | 2025-10-26 | Voca              | W   | 0.121      | -            | -                | -                | -         |     0.10 | br0, Jeorge, nitr0, Sonic, XotiC |
|            1 |     5271 | 2025-10-25 | SKDC              | W   | 0.115      | -            | -                | -                | -         |     0.02 | br0, Jeorge, nitr0, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,766.18)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $32,500.00     | $32,500.00      |
| 2026-03-05 |      0.988 | $3,000.00      | $2,963.26       |
| 2026-02-08 |      0.821 | $10,000.00     | $8,212.17       |
| 2026-01-11 |      0.636 | $7,000.00      | $4,455.37       |
| 2026-01-04 |      0.591 | $5,000.00      | $2,953.69       |
| 2025-11-09 |      0.217 | $5,500.00      | $1,191.58       |
| 2025-10-26 |      0.123 | $4,000.00      | $490.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
