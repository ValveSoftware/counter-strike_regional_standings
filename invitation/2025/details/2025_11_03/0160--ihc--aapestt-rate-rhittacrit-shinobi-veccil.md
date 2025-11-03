### Roster Details<br />
Team Name: IHC<br />
Roster: Aapestt, rate, rhittacrit, shinobi, Veccil<br />
Global Rank: [160](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [19]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  669.3<br />
<br />
Final Rank Value (669.3) = Starting Rank Value (670.2) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.2
- 400 + ( ( 0.144 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 670.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      677 | 2025-10-06 | NSN               | L   | 1.000      | -            | -                | -                | -         |   -13.07 | Aapestt, rate, rhittacrit, shinobi, Veccil |
|           18 |      735 | 2025-10-05 | FengDa            | L   | 1.000      | -            | -                | -                | -         |    -9.23 | Aapestt, rate, rhittacrit, shinobi, Veccil |
|           17 |     1676 | 2025-09-10 | Legion            | L   | 0.839      | -            | -                | -                | -         |   -14.93 | Aapestt, rate, rhittacrit, shinobi, Veccil |
|           16 |     1721 | 2025-09-09 | MAXXPOWER         | W   | 0.833      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.96 | Aapestt, rate, rhittacrit, shinobi, Veccil |
|           15 |     1765 | 2025-09-08 | Just Swing        | L   | 0.826      | -            | -                | -                | -         |   -12.96 | Aapestt, rate, rhittacrit, shinobi, Veccil |
|           14 |     1851 | 2025-09-05 | NomadS            | L   | 0.805      | -            | -                | -                | -         |    -9.96 | Aapestt, NEUZ, rhittacrit, shinobi, Veccil |
|           13 |     1859 | 2025-09-04 | The Huns          | L   | 0.804      | -            | -                | -                | -         |    -2.10 | Aapestt, NEUZ, rhittacrit, shinobi, Veccil |
|           12 |     2325 | 2025-08-15 | The Huns          | L   | 0.666      | -            | -                | -                | -         |    -1.74 | cool4st, rate, shinobi, Veccil, yAmi       |
|           11 |     2367 | 2025-08-14 | Eruption          | W   | 0.659      | 0.333        | 0.010 (0.002)    | 0.226 (0.050)    | 0 (0.000) |    14.29 | cool4st, rate, shinobi, Veccil, yAmi       |
|           10 |     2426 | 2025-08-13 | L4S               | W   | 0.653      | 0.333        | 0.000 (0.000)    | 0.026 (0.006)    | 0 (0.000) |     6.27 | cool4st, rate, shinobi, Veccil, yAmi       |
|            9 |     2475 | 2025-08-12 | CRIMSON           | W   | 0.646      | 0.333        | 0.002 (0.000)    | 0.051 (0.011)    | 0 (0.000) |     5.12 | cool4st, rate, shinobi, Veccil, yAmi       |
|            8 |     2524 | 2025-08-11 | The Huns          | L   | 0.639      | -            | -                | -                | -         |    -1.46 | cool4st, rate, shinobi, Veccil, yAmi       |
|            7 |     3047 | 2025-07-14 | HOTU              | L   | 0.452      | -            | -                | -                | -         |    -5.77 | Aapestt, cool4st, rate, shinobi, yAmi      |
|            6 |     3051 | 2025-07-14 | Chinggis Warriors | W   | 0.451      | 0.624        | 0.015 (0.004)    | 0.434 (0.122)    | 0 (0.000) |    12.18 | Aapestt, cool4st, rate, shinobi, yAmi      |
|            5 |     3066 | 2025-07-13 | SemperFi          | W   | 0.446      | 0.624        | 0.018 (0.005)    | 0.460 (0.128)    | 0 (0.000) |     7.91 | Aapestt, cool4st, rate, shinobi, yAmi      |
|            4 |     3070 | 2025-07-13 | NomadS            | W   | 0.445      | 0.624        | 0.007 (0.002)    | 0.293 (0.081)    | 0 (0.000) |     8.30 | Aapestt, cool4st, rate, shinobi, yAmi      |
|            3 |     3091 | 2025-07-12 | FengDa            | W   | 0.439      | 0.624        | 0.025 (0.007)    | 0.340 (0.093)    | 0 (0.000) |    10.44 | Aapestt, cool4st, rate, shinobi, yAmi      |
|            2 |     3094 | 2025-07-12 | HOTU              | L   | 0.438      | -            | -                | -                | -         |    -5.41 | Aapestt, cool4st, rate, shinobi, yAmi      |
|            1 |     3132 | 2025-07-11 | Last Bullet       | W   | 0.432      | 0.624        | 0.002 (0.001)    | 0.217 (0.058)    | 0 (0.000) |     7.28 | Aapestt, cool4st, rate, shinobi, yAmi      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($608.26)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-06 |      0.811 | $750.00        | $608.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
