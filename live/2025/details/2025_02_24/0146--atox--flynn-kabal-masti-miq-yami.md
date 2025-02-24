### Roster Details<br />
Team Name: ATOX<br />
Roster: FlyNN, kabal, masti, MiQ, yAmi<br />
Global Rank: [146](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_24.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_02_24.md)<br />
<br />
Final Rank Value:  687.0<br />
<br />
Final Rank Value (687.0) = Starting Rank Value (688.4) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.4
- 400 + ( ( 0.151 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 688.4


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
|            8 |     1716 | 2024-11-03 | Lynn Vision       | L   | 0.443      | -            | -                | -                | -         |    -4.55 | FlyNN, kabal, masti, MiQ, yAmi  |
|            7 |     1739 | 2024-11-02 | TYLOO             | L   | 0.437      | -            | -                | -                | -         |    -6.04 | FlyNN, kabal, masti, MiQ, yAmi  |
|            6 |     2031 | 2024-10-18 | Chinggis Warriors | L   | 0.336      | -            | -                | -                | -         |    -4.20 | cool4st, kabal, MiQ, sk0R, yAmi |
|            5 |     2059 | 2024-10-17 | Clutch            | W   | 0.330      | 0.333        | 0.000 (0.000)    | 0.061 (0.007)    | 1 (0.330) |     2.88 | cool4st, kabal, MiQ, sk0R, yAmi |
|            4 |     2077 | 2024-10-16 | Lynn Vision       | W   | 0.325      | 0.143        | 0.011 (0.001)    | 0.341 (0.016)    | 0 (0.000) |     6.79 | FlyNN, kabal, masti, MiQ, yAmi  |
|            3 |     2085 | 2024-10-16 | Chinggis Warriors | L   | 0.324      | -            | -                | -                | -         |    -4.07 | cool4st, kabal, MiQ, sk0R, yAmi |
|            2 |     2105 | 2024-10-15 | Chinggis Warriors | W   | 0.318      | 0.143        | 0.015 (0.001)    | 0.374 (0.017)    | 0 (0.000) |     6.13 | FlyNN, kabal, masti, MiQ, yAmi  |
|            1 |     2110 | 2024-10-15 | The QUBE          | W   | 0.316      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.316) |     1.65 | cool4st, kabal, MiQ, sk0R, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,057.46)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.443 | $5,000.00      | $2,216.93       |
| 2024-10-18 |      0.336 | $2,500.00      | $840.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
