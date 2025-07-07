### Roster Details<br />
Team Name: Rhyno<br />
Roster: aragornN, Icarus, krazy, P3R3IIRA, seabraez<br />
Global Rank: [104](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  770.0<br />
<br />
Final Rank Value (770.0) = Starting Rank Value (773.7) + Head To Head Adjustments (-3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.269[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 773.7
- 400 + ( ( 0.200 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 773.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      817 | 2025-05-11 | Leça          | W   | 0.819      | 0.316        | 0.004 (0.001)    | 0.091 (0.024)    | 1 (0.819) |    14.37 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           12 |      840 | 2025-05-10 | LA MASIA      | W   | 0.813      | 0.316        | 0.009 (0.002)    | 0.029 (0.007)    | 1 (0.813) |     8.61 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           11 |      865 | 2025-05-09 | Impulse GW    | W   | 0.807      | 0.316        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.807) |     5.38 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           10 |     2244 | 2025-03-21 | TPuDCATb TPu  | L   | 0.480      | -            | -                | -                | -         |    -5.64 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |     2410 | 2025-03-15 | Leça          | L   | 0.440      | -            | -                | -                | -         |    -6.35 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |     2418 | 2025-03-15 | ECSTATIC      | L   | 0.439      | -            | -                | -                | -         |    -0.66 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |     2708 | 2025-03-07 | Zero Tenacity | L   | 0.387      | -            | -                | -                | -         |    -3.82 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |     2962 | 2025-02-27 | BC.Game       | L   | 0.332      | -            | -                | -                | -         |    -3.10 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |     3010 | 2025-02-26 | Alliance      | L   | 0.325      | -            | -                | -                | -         |    -1.78 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            4 |     3181 | 2025-02-20 | Betclic       | L   | 0.285      | -            | -                | -                | -         |    -2.06 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            3 |     3208 | 2025-02-19 | PARIVISION    | L   | 0.279      | -            | -                | -                | -         |    -1.44 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            2 |     3273 | 2025-02-17 | Mercenaires   | L   | 0.266      | -            | -                | -                | -         |    -7.00 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            1 |     3991 | 2025-01-09 | Insilio       | L   | 0.006      | -            | -                | -                | -         |    -0.16 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,559.61)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.819 | $2,829.00      | $2,317.53       |
| 2025-03-16 |      0.447 | $542.00        | $242.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
