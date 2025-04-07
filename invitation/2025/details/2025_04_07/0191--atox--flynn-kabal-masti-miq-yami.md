### Roster Details<br />
Team Name: ATOX<br />
Roster: FlyNN, kabal, masti, MiQ, yAmi<br />
Global Rank: [191](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [25]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  621.9<br />
<br />
Final Rank Value (621.9) = Starting Rank Value (621.5) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.5
- 400 + ( ( 0.120 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 621.5


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
|            8 |     2739 | 2024-11-03 | Lynn Vision       | L   | 0.164      | -            | -                | -                | -         |    -1.39 | FlyNN, kabal, masti, MiQ, yAmi  |
|            7 |     2762 | 2024-11-02 | TYLOO             | L   | 0.159      | -            | -                | -                | -         |    -0.74 | FlyNN, kabal, masti, MiQ, yAmi  |
|            6 |     3054 | 2024-10-18 | Chinggis Warriors | L   | 0.058      | -            | -                | -                | -         |    -0.25 | cool4st, kabal, MiQ, sk0R, yAmi |
|            5 |     3082 | 2024-10-17 | Clutch            | W   | 0.052      | 0.333        | 0.000 (0.000)    | 0.012 (0.000)    | 1 (0.052) |     0.53 | cool4st, kabal, MiQ, sk0R, yAmi |
|            4 |     3100 | 2024-10-16 | Lynn Vision       | W   | 0.047      | 0.143        | 0.021 (0.000)    | 0.328 (0.002)    | 0 (0.000) |     1.08 | FlyNN, kabal, masti, MiQ, yAmi  |
|            3 |     3108 | 2024-10-16 | Chinggis Warriors | L   | 0.045      | -            | -                | -                | -         |    -0.20 | cool4st, kabal, MiQ, sk0R, yAmi |
|            2 |     3128 | 2024-10-15 | Chinggis Warriors | W   | 0.040      | 0.143        | 0.029 (0.000)    | 0.545 (0.003)    | 0 (0.000) |     1.08 | FlyNN, kabal, masti, MiQ, yAmi  |
|            1 |     3133 | 2024-10-15 | The QUBE          | W   | 0.038      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.038) |     0.27 | cool4st, kabal, MiQ, sk0R, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($969.78)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.165 | $5,000.00      | $825.14         |
| 2024-10-18 |      0.058 | $2,500.00      | $144.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
