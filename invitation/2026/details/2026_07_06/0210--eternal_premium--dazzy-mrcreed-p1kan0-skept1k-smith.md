### Roster Details<br />
Team Name: eternal premium<br />
Roster: dazzy, MRcreed, P1kan0, skept1K, smith<br />
Global Rank: [210](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [142]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  723.5<br />
<br />
Final Rank Value (723.5) = Starting Rank Value (695.1) + Head To Head Adjustments (28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.226[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.156[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.1
- 400 + ( ( 0.157 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 695.1


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
|           22 |        7 | 2026-07-05 | Entropy              | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.323 (0.046)    | 0 (0.000) |    18.47 | dazzy, famous, Innerpeace, P1kan0, skept1K |
|           21 |       18 | 2026-07-03 | Sashi Academy        | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.153 (0.022)    | 0 (0.000) |    19.66 | dazzy, famous, Innerpeace, MRcreed, smith  |
|           20 |       59 | 2026-06-29 | Julie&Cie            | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.147 (0.021)    | 0 (0.000) |    17.08 | dazzy, famous, Innerpeace, MRcreed, smith  |
|           19 |      104 | 2026-06-26 | Sashi Academy        | L   | 1.000      | -            | -                | -                | -         |   -10.22 | dazzy, famous, Innerpeace, MRcreed, smith  |
|           18 |      400 | 2026-06-10 | Wingman              | L   | 1.000      | -            | -                | -                | -         |   -23.25 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           17 |      434 | 2026-06-08 | Misa                 | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.529 (0.076)    | 0 (0.000) |    21.78 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           16 |      515 | 2026-06-05 | Project 91           | W   | 0.995      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.41 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           15 |      607 | 2026-06-01 | QUAZAR               | L   | 0.968      | -            | -                | -                | -         |   -10.68 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           14 |     1001 | 2026-05-22 | Oxuji                | L   | 0.901      | -            | -                | -                | -         |    -2.98 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           13 |     1025 | 2026-05-22 | BAKS                 | L   | 0.899      | -            | -                | -                | -         |   -13.31 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           12 |     1031 | 2026-05-22 | WeClear              | W   | 0.899      | 0.303        | 0.000 (0.000)    | 0.033 (0.009)    | 1 (0.899) |     5.43 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           11 |     2398 | 2026-04-07 | CYBERSHOKE Prospects | L   | 0.600      | -            | -                | -                | -         |    -1.28 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|           10 |     2403 | 2026-04-07 | premghouls           | W   | 0.599      | 0.275        | 0.000 (0.000)    | 0.014 (0.002)    | 1 (0.599) |     5.09 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|            9 |     2716 | 2026-04-02 | CYBERSHOKE Prospects | L   | 0.568      | -            | -                | -                | -         |    -1.13 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|            8 |     2732 | 2026-04-02 | TDK                  | L   | 0.567      | -            | -                | -                | -         |    -1.35 | dazzy, MRcreed, P1kan0, skept1K, smith     |
|            7 |     3828 | 2026-03-15 | Aurora Young Blud    | L   | 0.447      | -            | -                | -                | -         |    -8.38 | dazzy, fynchojka, P1kan0, skept1K, smith   |
|            6 |     3902 | 2026-03-13 | cirahvi              | W   | 0.435      | 0.143        | 0.004 (0.000)    | 0.394 (0.024)    | 0 (0.000) |     7.11 | dazzy, fynchojka, P1kan0, skept1K, smith   |
|            5 |     4005 | 2026-03-11 | LFO 6                | W   | 0.422      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.23 | dazzy, fynchojka, P1kan0, skept1K, smith   |
|            4 |     4103 | 2026-03-09 | MASONIC              | W   | 0.407      | 0.143        | 0.011 (0.001)    | 0.498 (0.029)    | 0 (0.000) |    11.31 | dazzy, fynchojka, P1kan0, skept1K, smith   |
|            3 |     4314 | 2026-03-05 | NEW VISION           | L   | 0.381      | -            | -                | -                | -         |    -5.08 | dazzy, fynchojka, P1kan0, skept1K, smith   |
|            2 |     4374 | 2026-03-04 | Arch                 | L   | 0.374      | -            | -                | -                | -         |    -6.72 | dazzy, fynchojka, P1kan0, skept1K, smith   |
|            1 |     4407 | 2026-03-04 | 1win                 | L   | 0.371      | -            | -                | -                | -         |    -0.77 | dazzy, fynchojka, P1kan0, skept1K, smith   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($216.33)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-07 |      0.601 | $360.00        | $216.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
