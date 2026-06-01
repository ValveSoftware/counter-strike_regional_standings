### Roster Details<br />
Team Name: NRG<br />
Roster: br0, Grim, nitr0, oSee, Sonic<br />
Global Rank: [52](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [11]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1247.2<br />
<br />
Final Rank Value (1247.2) = Starting Rank Value (1202.6) + Head To Head Adjustments (44.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.495[<sup>1</sup>](#table2)
- Bounty Collected: 0.460[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.530[<sup>2</sup>](#table1)

The average of these factors is 0.421<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1202.6
- 400 + ( ( 0.421 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1202.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      432 | 2026-05-20 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -1.03 | daps, Grim, nitr0, oSee, Sonic  |
|           32 |      458 | 2026-05-19 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -1.21 | br0, Grim, nitr0, oSee, Sonic   |
|           31 |      663 | 2026-05-12 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -6.97 | br0, Grim, nitr0, oSee, Sonic   |
|           30 |      695 | 2026-05-11 | FUT               | L   | 1.000      | -            | -                | -                | -         |    -2.02 | br0, Grim, nitr0, oSee, Sonic   |
|           29 |     1255 | 2026-04-25 | Passion UA        | L   | 0.957      | -            | -                | -                | -         |   -15.19 | br0, Grim, nitr0, oSee, Sonic   |
|           28 |     1269 | 2026-04-25 | LAG               | W   | 0.955      | 0.371        | 0.033 (0.012)    | 0.681 (0.241)    | 1 (0.955) |     5.33 | br0, Grim, nitr0, oSee, Sonic   |
|           27 |     1294 | 2026-04-25 | Foxtrot           | W   | 0.954      | -            | -                | -                | 1 (0.954) |     0.23 | br0, Grim, nitr0, oSee, Sonic   |
|           26 |     1753 | 2026-04-07 | Legacy            | L   | 0.831      | -            | -                | -                | -         |    -1.02 | br0, Grim, nitr0, oSee, Sonic   |
|           25 |     1782 | 2026-04-06 | EYEBALLERS        | L   | 0.825      | -            | -                | -                | -         |    -8.86 | br0, Grim, nitr0, oSee, Sonic   |
|           24 |     1848 | 2026-04-05 | FUT               | L   | 0.818      | -            | -                | -                | -         |    -2.26 | br0, Grim, nitr0, oSee, Sonic   |
|           23 |     1914 | 2026-04-04 | Voca              | W   | 0.812      | 1.000        | 0.053 (0.043)    | 0.661 (0.537)    | 1 (0.812) |    13.60 | br0, Grim, nitr0, oSee, Sonic   |
|           22 |     2831 | 2026-03-22 | FURIA             | L   | 0.727      | -            | -                | -                | -         |    -1.61 | br0, Grim, nitr0, oSee, Sonic   |
|           21 |     2959 | 2026-03-20 | B8                | W   | 0.712      | 1.000        | 0.329 (0.235)    | 0.469 (0.334)    | 1 (0.712) |    19.68 | br0, Grim, nitr0, oSee, Sonic   |
|           20 |     3051 | 2026-03-18 | Falcons           | L   | 0.699      | -            | -                | -                | -         |    -0.38 | br0, Grim, nitr0, oSee, Sonic   |
|           19 |     3748 | 2026-03-03 | Ninjas in Pyjamas | L   | 0.602      | -            | -                | -                | -         |    -5.55 | br0, Grim, nitr0, oSee, Sonic   |
|           18 |     3827 | 2026-03-02 | Monte             | L   | 0.592      | -            | -                | -                | -         |    -4.16 | br0, Grim, nitr0, oSee, Sonic   |
|           17 |     3870 | 2026-03-01 | HEROIC            | L   | 0.586      | -            | -                | -                | -         |    -4.59 | br0, Grim, nitr0, oSee, Sonic   |
|           16 |     4878 | 2026-02-08 | Passion UA        | W   | 0.447      | 0.769        | 0.034 (0.012)    | 0.419 (0.144)    | -         |     7.71 | br0, Jeorge, nitr0, oSee, Sonic |
|           15 |     4903 | 2026-02-07 | Voca              | W   | 0.441      | 0.769        | 0.053 (0.018)    | 0.661 (0.224)    | -         |     7.04 | br0, Jeorge, nitr0, oSee, Sonic |
|           14 |     4946 | 2026-02-06 | Fisher College    | W   | 0.434      | 0.769        | 0.049 (0.016)    | 0.482 (0.161)    | -         |     5.82 | br0, Jeorge, nitr0, oSee, Sonic |
|           13 |     5055 | 2026-02-02 | Falcons           | L   | 0.407      | -            | -                | -                | -         |    -0.20 | br0, Jeorge, nitr0, oSee, Sonic |
|           12 |     5092 | 2026-02-01 | MOUZ              | L   | 0.399      | -            | -                | -                | -         |    -0.25 | br0, Jeorge, nitr0, oSee, Sonic |
|           11 |     5163 | 2026-01-30 | Astralis          | W   | 0.386      | 0.783        | 0.650 (0.197)    | 0.390 (0.118)    | 1 (0.386) |    11.44 | br0, Jeorge, nitr0, oSee, Sonic |
|           10 |     5212 | 2026-01-28 | B8                | W   | 0.373      | 0.783        | 0.329 (0.096)    | 0.469 (0.137)    | 1 (0.373) |    10.74 | br0, Jeorge, nitr0, oSee, Sonic |
|            9 |     5728 | 2026-01-11 | M80               | L   | 0.263      | -            | -                | -                | -         |    -2.84 | br0, Jeorge, nitr0, oSee, Sonic |
|            8 |     5729 | 2026-01-11 | Marsborne         | W   | 0.262      | -            | -                | -                | 1 (0.262) |     2.32 | br0, Jeorge, nitr0, oSee, Sonic |
|            7 |     5741 | 2026-01-10 | Voca              | W   | 0.254      | 0.396        | 0.053 (0.005)    | 0.661 (0.067)    | 1 (0.254) |     4.48 | br0, Jeorge, nitr0, oSee, Sonic |
|            6 |     5750 | 2026-01-09 | Outfit 49         | W   | 0.250      | -            | -                | -                | 1 (0.250) |     0.28 | br0, Jeorge, nitr0, oSee, Sonic |
|            5 |     5769 | 2026-01-04 | 9INE              | W   | 0.217      | -            | -                | -                | 1 (0.217) |     1.20 | br0, Jeorge, nitr0, oSee, Sonic |
|            4 |     5772 | 2026-01-04 | GamerLegion       | W   | 0.214      | 0.323        | 0.551 (0.038)    | -                | -         |     6.42 | br0, Jeorge, nitr0, oSee, Sonic |
|            3 |     5785 | 2026-01-04 | Voca              | W   | 0.214      | 0.323        | -                | 0.661 (0.046)    | -         |     3.90 | br0, Jeorge, nitr0, oSee, Sonic |
|            2 |     5824 | 2026-01-03 | Marsborne         | W   | 0.208      | -            | -                | -                | -         |     2.04 | br0, Jeorge, nitr0, oSee, Sonic |
|            1 |     5832 | 2026-01-03 | EMPIRE            | W   | 0.207      | -            | -                | -                | -         |     0.49 | br0, Jeorge, nitr0, oSee, Sonic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,484.58)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-05-17 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-04-11 |      0.860 | $18,750.00     | $16,131.35      |
| 2026-03-29 |      0.773 | $32,500.00     | $25,107.73      |
| 2026-03-05 |      0.614 | $3,000.00      | $1,842.58       |
| 2026-02-08 |      0.448 | $10,000.00     | $4,476.57       |
| 2026-01-11 |      0.263 | $7,000.00      | $1,840.45       |
| 2026-01-04 |      0.217 | $5,000.00      | $1,085.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
