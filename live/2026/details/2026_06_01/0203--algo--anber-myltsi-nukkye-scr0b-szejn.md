### Roster Details<br />
Team Name: ALGO<br />
Roster: anber, myltsi, nukkye, Scr0b, szejn<br />
Global Rank: [203](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [129]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  743.8<br />
<br />
Final Rank Value (743.8) = Starting Rank Value (705.1) + Head To Head Adjustments (38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.1
- 400 + ( ( 0.160 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 705.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |     4369 | 2026-02-19 | Passion UA       | L   | 0.521      | -            | -                | -                | -         |    -0.71 | anber, myltsi, nukkye, Scr0b, szejn |
|           22 |     4373 | 2026-02-19 | HOTU             | L   | 0.521      | -            | -                | -                | -         |    -0.43 | anber, myltsi, nukkye, Scr0b, szejn |
|           21 |     4493 | 2026-02-17 | Famalicão        | L   | 0.507      | -            | -                | -                | -         |    -6.63 | anber, Dytor, myltsi, nukkye, szejn |
|           20 |     4546 | 2026-02-16 | Phantom          | L   | 0.499      | -            | -                | -                | -         |    -1.68 | anber, Dytor, myltsi, nukkye, szejn |
|           19 |     4550 | 2026-02-16 | SIXSEVEN         | W   | 0.499      | 0.384        | 0.001 (0.000)    | -                | 0 (0.000) |     5.07 | anber, nukkye, Scr0b, Shara, szejn  |
|           18 |     4606 | 2026-02-15 | ALLINNERS        | W   | 0.493      | 0.384        | 0.001 (0.000)    | 0.053 (0.010)    | 0 (0.000) |     6.39 | anber, nukkye, Scr0b, Shara, szejn  |
|           17 |     4639 | 2026-02-14 | KOLESIE          | L   | 0.487      | -            | -                | -                | -         |    -1.20 | anber, nukkye, Scr0b, Shara, szejn  |
|           16 |     4649 | 2026-02-14 | ex-Zero Tenacity | W   | 0.487      | 0.435        | -                | 0.815 (0.172)    | 0 (0.000) |     7.13 | anber, Dytor, myltsi, nukkye, szejn |
|           15 |     4719 | 2026-02-13 | Fuzos            | W   | 0.479      | 0.384        | 0.002 (0.000)    | 0.254 (0.047)    | 0 (0.000) |     7.87 | anber, myltsi, nukkye, Scr0b, szejn |
|           14 |     4769 | 2026-02-12 | GenOne           | W   | 0.472      | 0.435        | 0.011 (0.002)    | 0.916 (0.188)    | 0 (0.000) |    11.06 | anber, Dytor, myltsi, nukkye, szejn |
|           13 |     4836 | 2026-02-10 | Leo              | L   | 0.460      | -            | -                | -                | -         |    -5.54 | anber, myltsi, nukkye, Scr0b, szejn |
|           12 |     4863 | 2026-02-09 | Metizport        | L   | 0.452      | -            | -                | -                | -         |    -2.54 | anber, myltsi, nukkye, Scr0b, szejn |
|           11 |     5676 | 2026-01-15 | Bebop            | L   | 0.285      | -            | -                | -                | -         |    -6.36 | anber, nopzy, nukkye, Scr0b, szejn  |
|           10 |     5712 | 2026-01-13 | Bushido Wildcats | W   | 0.273      | 0.333        | -                | 0.271 (0.025)    | -         |     2.59 | anber, nopzy, nukkye, Scr0b, szejn  |
|            9 |     5723 | 2026-01-12 | Lilmix           | W   | 0.266      | 0.333        | 0.004 (0.000)    | 0.140 (0.012)    | -         |     5.20 | anber, nopzy, nukkye, Scr0b, szejn  |
|            8 |     5756 | 2026-01-08 | MANA             | L   | 0.239      | -            | -                | -                | -         |    -2.21 | anber, nopzy, nukkye, Scr0b, szejn  |
|            7 |     5762 | 2026-01-05 | MOUZ NXT         | L   | 0.220      | -            | -                | -                | -         |    -0.85 | anber, nopzy, nukkye, Scr0b, szejn  |
|            6 |     5763 | 2026-01-05 | OlyBet           | W   | 0.219      | 0.314        | 0.002 (0.000)    | 0.217 (0.015)    | 1 (0.219) |     4.60 | anber, nopzy, nukkye, Scr0b, szejn  |
|            5 |     5773 | 2026-01-04 | cirahvi          | L   | 0.214      | -            | -                | -                | -         |    -2.96 | anber, nopzy, nukkye, Scr0b, szejn  |
|            4 |     5776 | 2026-01-04 | SemperFi         | W   | 0.214      | 0.314        | 0.011 (0.001)    | 0.347 (0.023)    | 1 (0.214) |     5.97 | anber, nopzy, nukkye, Scr0b, szejn  |
|            3 |     5782 | 2026-01-04 | MOUZ NXT         | W   | 0.214      | 0.314        | 0.015 (0.001)    | 0.814 (0.055)    | 1 (0.214) |     5.93 | anber, nopzy, nukkye, Scr0b, szejn  |
|            2 |     5787 | 2026-01-04 | OlyBet           | W   | 0.213      | 0.314        | 0.002 (0.000)    | 0.217 (0.015)    | 1 (0.213) |     4.59 | anber, nopzy, nukkye, Scr0b, szejn  |
|            1 |     5791 | 2026-01-04 | EC BANGA         | W   | 0.213      | 0.314        | 0.002 (0.000)    | -                | 1 (0.213) |     3.43 | anber, nopzy, nukkye, Scr0b, szejn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($440.09)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-05 |      0.220 | $2,000.00      | $440.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
