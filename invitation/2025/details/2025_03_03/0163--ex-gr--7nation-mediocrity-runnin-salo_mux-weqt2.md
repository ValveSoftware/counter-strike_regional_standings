### Roster Details<br />
Team Name: ex-GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [163](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [108]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  665.7<br />
<br />
Final Rank Value (665.7) = Starting Rank Value (683.2) + Head To Head Adjustments (-17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.2
- 400 + ( ( 0.147 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 683.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1095 | 2024-12-05 | Chinggis Warriors | L   | 0.611      | -            | -                | -                | -         |    -7.93 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           13 |     1104 | 2024-12-04 | DogEvil           | L   | 0.610      | -            | -                | -                | -         |   -13.73 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           12 |     1391 | 2024-11-21 | The Huns          | L   | 0.518      | -            | -                | -                | -         |    -4.39 | mediocrity, Runnin, SALO_MUX, Sange, weqt2       |
|           11 |     1398 | 2024-11-20 | harizma           | L   | 0.517      | -            | -                | -                | -         |    -9.03 | dukefissura, mediocrity, Runnin, SALO_MUX, weqt2 |
|           10 |     1627 | 2024-11-11 | FlyQuest          | L   | 0.457      | -            | -                | -                | -         |    -2.09 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            9 |     1652 | 2024-11-11 | Rare Atom         | L   | 0.452      | -            | -                | -                | -         |    -4.30 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            8 |     1705 | 2024-11-08 | IHC               | W   | 0.432      | 0.333        | 0.003 (0.000)    | 0.076 (0.011)    | 0 (0.000) |     6.01 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            7 |     1710 | 2024-11-08 | Chinggis Warriors | W   | 0.431      | 0.333        | 0.015 (0.002)    | 0.525 (0.075)    | 0 (0.000) |     8.14 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            6 |     1764 | 2024-11-05 | IHC               | W   | 0.411      | 0.333        | 0.003 (0.000)    | 0.076 (0.010)    | 0 (0.000) |     5.79 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            5 |     1766 | 2024-11-04 | Chinggis Warriors | W   | 0.410      | 0.333        | 0.015 (0.002)    | 0.525 (0.072)    | 0 (0.000) |     8.07 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            4 |     2167 | 2024-10-16 | Chinggis Warriors | L   | 0.280      | -            | -                | -                | -         |    -3.30 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |
|            3 |     2194 | 2024-10-15 | -72c              | W   | 0.273      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.44 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |
|            2 |     3076 | 2024-09-18 | EYEBALLERS        | L   | 0.093      | -            | -                | -                | -         |    -1.14 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            1 |     3106 | 2024-09-17 | WW                | L   | 0.087      | -            | -                | -                | -         |    -2.03 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,619.72)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.432 | $7,500.00      | $3,239.69       |
| 2024-10-18 |      0.292 | $1,300.00      | $380.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
