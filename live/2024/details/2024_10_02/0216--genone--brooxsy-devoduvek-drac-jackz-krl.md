### Roster Details<br />
Team Name: GenOne<br />
Roster: Brooxsy, devoduvek, drac, JACKZ, KRL<br />
Global Rank: [216](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [131]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  541.7<br />
<br />
Final Rank Value (541.7) = Starting Rank Value (505.3) + Head To Head Adjustments (36.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.3
- 400 + ( ( 0.055 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 505.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      429 | 2024-09-21 | HOTU             | L   | 1.000      | -            | -                | -                | -         |    -5.64 | Brooxsy, devoduvek, drac, JACKZ, KRL      |
|           13 |      462 | 2024-09-20 | Nexus            | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.516 (0.074)    | 0 (0.000) |    23.73 | Brooxsy, devoduvek, drac, JACKZ, Kursy    |
|           12 |      498 | 2024-09-19 | HOTU             | L   | 1.000      | -            | -                | -                | -         |    -4.75 | Brooxsy, devoduvek, drac, JACKZ, Kursy    |
|           11 |     1074 | 2024-08-29 | Aurora           | L   | 0.973      | -            | -                | -                | -         |    -0.92 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|           10 |     1088 | 2024-08-29 | SAW              | L   | 0.972      | -            | -                | -                | -         |    -0.22 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            9 |     1509 | 2024-08-20 | Illuminar        | L   | 0.911      | -            | -                | -                | -         |    -5.57 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            8 |     1523 | 2024-08-19 | Young Ninjas     | L   | 0.907      | -            | -                | -                | -         |    -3.77 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            7 |     1578 | 2024-08-17 | B8               | L   | 0.893      | -            | -                | -                | -         |    -1.38 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            6 |     1586 | 2024-08-17 | 500              | W   | 0.892      | 0.143        | 0.000 (0.000)    | 0.172 (0.022)    | 0 (0.000) |    15.08 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            5 |     2449 | 2024-07-22 | Astralis Talent  | L   | 0.719      | -            | -                | -                | -         |    -7.01 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            4 |     2507 | 2024-07-20 | FLuffy Gangsters | W   | 0.706      | 0.143        | 0.004 (0.000)    | 0.355 (0.036)    | 0 (0.000) |    17.52 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            3 |     2555 | 2024-07-19 | Grannys Knockers | W   | 0.698      | 0.143        | 0.002 (0.000)    | 0.094 (0.009)    | 0 (0.000) |    16.60 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            2 |     3933 | 2024-05-19 | Over30           | L   | 0.291      | -            | -                | -                | -         |    -4.31 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            1 |     3940 | 2024-05-19 | 11 minutos tarde | L   | 0.291      | -            | -                | -                | -         |    -2.95 | Brooxsy, devoduvek, drac, Kursy, unshaark |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
