### Roster Details<br />
Team Name: ALGO<br />
Roster: anber, myltsi, nukkye, Scr0b, szejn<br />
Global Rank: [101](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [76]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  945.3<br />
<br />
Final Rank Value (945.3) = Starting Rank Value (944.0) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.417[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.0
- 400 + ( ( 0.288 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 944.0


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
|           23 |      424 | 2026-02-19 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -4.06 | anber, myltsi, nukkye, Scr0b, szejn |
|           22 |      428 | 2026-02-19 | HOTU             | L   | 1.000      | -            | -                | -                | -         |    -2.54 | anber, myltsi, nukkye, Scr0b, szejn |
|           21 |      547 | 2026-02-17 | Famalicão        | L   | 1.000      | -            | -                | -                | -         |   -18.99 | anber, Dytor, myltsi, nukkye, szejn |
|           20 |      600 | 2026-02-16 | Phantom          | L   | 1.000      | -            | -                | -                | -         |    -9.97 | anber, Dytor, myltsi, nukkye, szejn |
|           19 |      604 | 2026-02-16 | SIXSEVEN         | W   | 1.000      | 0.384        | 0.019 (0.007)    | 0.467 (0.179)    | 0 (0.000) |    13.56 | anber, nukkye, Scr0b, Shara, szejn  |
|           18 |      659 | 2026-02-15 | ALLINNERS        | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.174 (0.067)    | 0 (0.000) |    10.83 | anber, nukkye, Scr0b, Shara, szejn  |
|           17 |      691 | 2026-02-14 | KOLESIE          | L   | 1.000      | -            | -                | -                | -         |    -6.20 | anber, nukkye, Scr0b, Shara, szejn  |
|           16 |      700 | 2026-02-14 | ex-Zero Tenacity | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.210 (0.091)    | 0 (0.000) |     7.53 | anber, Dytor, myltsi, nukkye, szejn |
|           15 |      769 | 2026-02-13 | Fuzos            | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.480 (0.184)    | 0 (0.000) |    13.14 | anber, myltsi, nukkye, Scr0b, szejn |
|           14 |      819 | 2026-02-12 | GenOne           | W   | 1.000      | 0.435        | 0.030 (0.013)    | 0.692 (0.301)    | 0 (0.000) |    20.21 | anber, Dytor, myltsi, nukkye, szejn |
|           13 |      886 | 2026-02-10 | Leo              | L   | 1.000      | -            | -                | -                | -         |   -17.89 | anber, myltsi, nukkye, Scr0b, szejn |
|           12 |      913 | 2026-02-09 | Metizport        | L   | 1.000      | -            | -                | -                | -         |   -13.81 | anber, myltsi, nukkye, Scr0b, szejn |
|           11 |     1701 | 2026-01-15 | Bebop            | L   | 0.892      | -            | -                | -                | -         |   -18.05 | anber, nopzy, nukkye, Scr0b, szejn  |
|           10 |     1737 | 2026-01-13 | Bushido Wildcats | W   | 0.879      | 0.333        | -                | 0.294 (0.086)    | -         |     8.19 | anber, nopzy, nukkye, Scr0b, szejn  |
|            9 |     1748 | 2026-01-12 | Lilmix           | W   | 0.873      | -            | -                | -                | -         |     7.32 | anber, nopzy, nukkye, Scr0b, szejn  |
|            8 |     1773 | 2026-01-08 | MANA             | L   | 0.845      | -            | -                | -                | -         |   -18.73 | anber, nopzy, nukkye, Scr0b, szejn  |
|            7 |     1779 | 2026-01-05 | MOUZ NXT         | L   | 0.826      | -            | -                | -                | -         |    -6.39 | anber, nopzy, nukkye, Scr0b, szejn  |
|            6 |     1780 | 2026-01-05 | OlyBet           | W   | 0.826      | 0.314        | 0.004 (0.001)    | 0.223 (0.058)    | 1 (0.826) |     9.94 | anber, nopzy, nukkye, Scr0b, szejn  |
|            5 |     1790 | 2026-01-04 | CSDIILIT         | L   | 0.821      | -            | -                | -                | -         |   -22.00 | anber, nopzy, nukkye, Scr0b, szejn  |
|            4 |     1793 | 2026-01-04 | SemperFi         | W   | 0.821      | 0.314        | 0.006 (0.002)    | 0.305 (0.078)    | 1 (0.821) |    11.12 | anber, nopzy, nukkye, Scr0b, szejn  |
|            3 |     1799 | 2026-01-04 | MOUZ NXT         | W   | 0.820      | 0.314        | 0.034 (0.009)    | 1.000 (0.257)    | 1 (0.820) |    19.23 | anber, nopzy, nukkye, Scr0b, szejn  |
|            2 |     1804 | 2026-01-04 | OlyBet           | W   | 0.820      | 0.314        | 0.004 (0.001)    | 0.223 (0.057)    | 1 (0.820) |    10.11 | anber, nopzy, nukkye, Scr0b, szejn  |
|            1 |     1808 | 2026-01-04 | EC BANGA         | W   | 0.820      | 0.314        | 0.005 (0.001)    | -                | 1 (0.820) |     8.74 | anber, nopzy, nukkye, Scr0b, szejn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,653.10)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-05 |      0.827 | $2,000.00      | $1,653.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
