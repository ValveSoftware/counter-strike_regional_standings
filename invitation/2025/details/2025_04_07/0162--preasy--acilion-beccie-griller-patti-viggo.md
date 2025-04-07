### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Beccie, Griller, Patti, Viggo<br />
Global Rank: [162](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [103]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  642.6<br />
<br />
Final Rank Value (642.6) = Starting Rank Value (656.9) + Head To Head Adjustments (-14.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.9
- 400 + ( ( 0.139 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 656.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      444 | 2025-03-17 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |    -6.85 | AcilioN, Beccie, Griller, Patti, Viggo |
|           12 |     1028 | 2025-02-23 | ARCRED          | L   | 0.915      | -            | -                | -                | -         |   -12.44 | AcilioN, Beccie, Griller, Patti, Viggo |
|           11 |     1033 | 2025-02-23 | Garden Garage   | W   | 0.914      | 0.143        | 0.007 (0.001)    | 0.270 (0.035)    | 0 (0.000) |    15.46 | AcilioN, Beccie, Griller, Patti, Viggo |
|           10 |     1041 | 2025-02-23 | AMKAL           | W   | 0.913      | 0.143        | 0.005 (0.001)    | 0.718 (0.094)    | 0 (0.000) |    17.45 | AcilioN, Beccie, Griller, Patti, Viggo |
|            9 |     1195 | 2025-02-15 | RUBY            | L   | 0.860      | -            | -                | -                | -         |    -8.91 | AcilioN, Beccie, Griller, Patti, Viggo |
|            8 |     1677 | 2025-01-07 | CPH Wolves      | W   | 0.601      | 0.278        | 0.006 (0.001)    | 0.453 (0.076)    | 0 (0.000) |    12.21 | AcilioN, Beccie, Griller, Patti, Viggo |
|            7 |     1761 | 2024-12-20 | Astralis Talent | L   | 0.479      | -            | -                | -                | -         |    -7.37 | AcilioN, Beccie, Equip, Griller, Viggo |
|            6 |     1773 | 2024-12-19 | ADEPTS          | L   | 0.473      | -            | -                | -                | -         |   -10.38 | AcilioN, Beccie, Equip, Griller, Viggo |
|            5 |     1776 | 2024-12-19 | kONO            | L   | 0.472      | -            | -                | -                | -         |    -6.74 | AcilioN, Beccie, Equip, Griller, Viggo |
|            4 |     1796 | 2024-12-17 | ALASKA          | L   | 0.460      | -            | -                | -                | -         |    -3.83 | AcilioN, Beccie, Equip, Griller, Viggo |
|            3 |     2086 | 2024-12-02 | Monte           | L   | 0.362      | -            | -                | -                | -         |    -2.75 | AcilioN, Beccie, Equip, Griller, Viggo |
|            2 |     2744 | 2024-11-02 | MASONIC         | W   | 0.162      | 0.249        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.162) |     0.98 | AcilioN, Beccie, Equip, Griller, JBOEN |
|            1 |     2954 | 2024-10-23 | ALTERNATE aTTaX | L   | 0.092      | -            | -                | -                | -         |    -1.10 | AcilioN, Beccie, Equip, Griller, JBOEN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,356.33)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-07 |      0.601 | $2,000.00      | $1,202.71       |
| 2024-11-02 |      0.162 | $950.00        | $153.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
