### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: fury5k, NEUZ, starDUST, xerolte, Zilkenberg<br />
Global Rank: [82](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
<br />
Final Rank Value:  919.9<br />
<br />
Final Rank Value (919.9) = Starting Rank Value (938.9) + Head To Head Adjustments (-18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.416[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.9
- 400 + ( ( 0.273 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 938.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      281 | 2024-08-06 | TYLOO        | L   | 1.000      | -            | -                | -                | -         |   -13.44 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|           11 |      314 | 2024-08-05 | Lynn Vision  | W   | 1.000      | 0.380        | 0.079 (0.030)    | 0.161 (0.061)    | 1 (1.000) |    19.11 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|           10 |      386 | 2024-08-03 | Steel Helmet | W   | 1.000      | 0.380        | 0.005 (0.002)    | 0.000 (0.000)    | 1 (1.000) |     3.17 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            9 |     1161 | 2024-07-12 | Alter Ego    | L   | 0.978      | -            | -                | -                | -         |   -27.61 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            8 |     1165 | 2024-07-12 | TYLOO        | L   | 0.977      | -            | -                | -                | -         |   -15.14 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            7 |     1166 | 2024-07-12 | GR           | W   | 0.977      | 0.143        | 0.007 (0.001)    | 0.067 (0.009)    | 0 (0.000) |     5.01 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            6 |     1945 | 2024-06-01 | Aurora       | L   | 0.703      | -            | -                | -                | -         |    -1.01 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            5 |     1994 | 2024-05-30 | OG           | W   | 0.691      | 0.500        | 0.121 (0.042)    | 0.101 (0.035)    | 1 (0.691) |    11.84 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            4 |     2023 | 2024-05-28 | BLEED        | L   | 0.683      | -            | -                | -                | -         |    -2.39 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            3 |     2350 | 2024-05-17 | The MongolZ  | L   | 0.603      | -            | -                | -                | -         |    -0.11 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            2 |     2713 | 2024-05-03 | IHC          | W   | 0.512      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 1 (0.512) |     0.90 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |
|            1 |     2722 | 2024-05-02 | Eruption     | W   | 0.509      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.509) |     0.75 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,126.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
