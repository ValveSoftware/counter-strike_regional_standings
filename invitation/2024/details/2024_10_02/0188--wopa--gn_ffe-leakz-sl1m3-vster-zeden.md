### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Global Rank: [188](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [119]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  619.0<br />
<br />
Final Rank Value (619.0) = Starting Rank Value (624.4) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.4
- 400 + ( ( 0.117 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 624.4


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
|           14 |     1513 | 2024-08-20 | Grannys Knockers | L   | 0.911      | -            | -                | -                | -         |   -11.89 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |     1548 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.904      | -            | -                | -                | -         |    -6.41 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     2471 | 2024-07-21 | Sampi            | L   | 0.713      | -            | -                | -                | -         |    -4.30 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     2557 | 2024-07-19 | VP.Prodigy       | W   | 0.698      | 0.435        | 0.013 (0.004)    | 0.147 (0.045)    | 0 (0.000) |    15.38 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     2684 | 2024-07-17 | GUN5             | L   | 0.684      | -            | -                | -                | -         |    -3.16 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     2783 | 2024-07-15 | Passion UA       | L   | 0.671      | -            | -                | -                | -         |    -2.41 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     2988 | 2024-06-16 | FLuffy Gangsters | W   | 0.479      | 0.143        | 0.004 (0.000)    | 0.355 (0.024)    | 0 (0.000) |     9.81 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     3115 | 2024-06-12 | The Prodigies    | W   | 0.453      | 0.143        | 0.000 (0.000)    | 0.041 (0.003)    | 0 (0.000) |     5.52 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     3127 | 2024-06-12 | CPH Wolves       | L   | 0.452      | -            | -                | -                | -         |    -2.69 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     3136 | 2024-06-11 | ADEPTS           | W   | 0.447      | 0.143        | 0.001 (0.000)    | 0.044 (0.003)    | 0 (0.000) |     6.89 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     3600 | 2024-06-01 | Illuminar        | L   | 0.377      | -            | -                | -                | -         |    -7.90 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     3994 | 2024-05-17 | LEON             | L   | 0.279      | -            | -                | -                | -         |    -4.20 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4144 | 2024-05-14 | Secret           | W   | 0.258      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     2.35 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4159 | 2024-05-13 | VP.Prodigy       | L   | 0.253      | -            | -                | -                | -         |    -2.38 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($163.03)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
