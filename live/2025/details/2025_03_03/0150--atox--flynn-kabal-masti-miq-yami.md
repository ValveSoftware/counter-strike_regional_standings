### Roster Details<br />
Team Name: ATOX<br />
Roster: FlyNN, kabal, masti, MiQ, yAmi<br />
Global Rank: [150](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_03.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_03_03.md)<br />
<br />
Final Rank Value:  684.4<br />
<br />
Final Rank Value (684.4) = Starting Rank Value (685.8) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.8
- 400 + ( ( 0.148 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 685.8


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
|            8 |     1804 | 2024-11-03 | Lynn Vision       | L   | 0.397      | -            | -                | -                | -         |    -4.13 | FlyNN, kabal, masti, MiQ, yAmi  |
|            7 |     1827 | 2024-11-02 | TYLOO             | L   | 0.392      | -            | -                | -                | -         |    -5.37 | FlyNN, kabal, masti, MiQ, yAmi  |
|            6 |     2119 | 2024-10-18 | Chinggis Warriors | L   | 0.291      | -            | -                | -                | -         |    -3.58 | cool4st, kabal, MiQ, sk0R, yAmi |
|            5 |     2147 | 2024-10-17 | Clutch            | W   | 0.285      | 0.333        | 0.000 (0.000)    | 0.053 (0.005)    | 1 (0.285) |     2.58 | cool4st, kabal, MiQ, sk0R, yAmi |
|            4 |     2165 | 2024-10-16 | Lynn Vision       | W   | 0.280      | 0.143        | 0.011 (0.000)    | 0.329 (0.013)    | 0 (0.000) |     5.82 | FlyNN, kabal, masti, MiQ, yAmi  |
|            3 |     2173 | 2024-10-16 | Chinggis Warriors | L   | 0.278      | -            | -                | -                | -         |    -3.44 | cool4st, kabal, MiQ, sk0R, yAmi |
|            2 |     2193 | 2024-10-15 | Chinggis Warriors | W   | 0.273      | 0.143        | 0.015 (0.001)    | 0.525 (0.020)    | 0 (0.000) |     5.31 | FlyNN, kabal, masti, MiQ, yAmi  |
|            1 |     2198 | 2024-10-15 | The QUBE          | W   | 0.271      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.271) |     1.43 | cool4st, kabal, MiQ, sk0R, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,717.65)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.398 | $5,000.00      | $1,990.39       |
| 2024-10-18 |      0.291 | $2,500.00      | $727.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
