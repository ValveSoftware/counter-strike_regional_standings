### Roster Details<br />
Team Name: Vantage<br />
Roster: Arctic, Kiyo, neo, Oath, tidy<br />
Global Rank: [205](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [25]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  587.2<br />
<br />
Final Rank Value (587.2) = Starting Rank Value (598.4) + Head To Head Adjustments (-11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.106<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 598.4
- 400 + ( ( 0.106 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 598.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      789 | 2025-10-03 | Mindfreak   | L   | 0.997      | -            | -                | -                | -         |   -16.39 | Arctic, Kiyo, neo, Oath, tidy |
|            4 |      792 | 2025-10-03 | SemperFi    | L   | 0.996      | -            | -                | -                | -         |    -7.54 | Arctic, Kiyo, neo, Oath, tidy |
|            3 |     1020 | 2025-09-28 | BBBMBCBS    | W   | 0.958      | 0.302        | 0.000 (0.000)    | 0.039 (0.011)    | 0 (0.000) |    10.51 | Arctic, Kiyo, neo, Oath, tidy |
|            2 |     1022 | 2025-09-27 | Ground Zero | L   | 0.957      | -            | -                | -                | -         |   -12.89 | Arctic, Kiyo, neo, Oath, tidy |
|            1 |     1029 | 2025-09-27 | Underground | W   | 0.956      | 0.302        | 0.001 (0.000)    | 0.115 (0.033)    | 0 (0.000) |    15.09 | Arctic, Kiyo, neo, Oath, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($329.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-04 |      1.000 | $329.00        | $329.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
