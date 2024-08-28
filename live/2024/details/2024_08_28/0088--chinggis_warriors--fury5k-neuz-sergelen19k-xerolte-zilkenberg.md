### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg<br />
Global Rank: [88](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_08_28.md)<br />
Regional Rank: [6]( ../../standings_asia_2024_08_28.md)<br />
<br />
Final Rank Value:  911.2<br />
<br />
Final Rank Value (911.2) = Starting Rank Value (922.8) + Head To Head Adjustments (-11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.365[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 922.8
- 400 + ( ( 0.264 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 922.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       28 | 2024-08-28 | THE          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.108 (0.015)    | 0 (0.000) |     3.45 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           12 |      803 | 2024-08-06 | TYLOO        | L   | 1.000      | -            | -                | -                | -         |   -12.75 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|           11 |      836 | 2024-08-05 | Lynn Vision  | W   | 1.000      | 0.380        | 0.074 (0.028)    | 0.126 (0.048)    | 1 (1.000) |    17.89 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|           10 |      908 | 2024-08-03 | Steel Helmet | W   | 1.000      | 0.380        | 0.004 (0.002)    | 0.036 (0.014)    | 1 (1.000) |     3.34 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            9 |     1683 | 2024-07-12 | Alter Ego    | L   | 0.886      | -            | -                | -                | -         |   -24.82 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            8 |     1687 | 2024-07-12 | TYLOO        | L   | 0.885      | -            | -                | -                | -         |   -13.01 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            7 |     1688 | 2024-07-12 | GR           | W   | 0.885      | 0.143        | 0.007 (0.001)    | 0.131 (0.017)    | 0 (0.000) |     5.19 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            6 |     2467 | 2024-06-01 | Aurora       | L   | 0.611      | -            | -                | -                | -         |    -0.96 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            5 |     2516 | 2024-05-30 | OG           | W   | 0.599      | 0.500        | 0.144 (0.043)    | 0.316 (0.095)    | 1 (0.599) |    11.15 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            4 |     2545 | 2024-05-28 | BLEED        | L   | 0.590      | -            | -                | -                | -         |    -2.42 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            3 |     2872 | 2024-05-17 | The MongolZ  | L   | 0.511      | -            | -                | -                | -         |    -0.09 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            2 |     3235 | 2024-05-03 | IHC          | W   | 0.419      | 0.143        | 0.000 (0.000)    | 0.159 (0.010)    | 1 (0.419) |     0.78 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            1 |     3244 | 2024-05-02 | ARAVT        | W   | 0.417      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.417) |     0.67 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,126.00)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
