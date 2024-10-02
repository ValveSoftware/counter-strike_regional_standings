### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, ASTRA, D7, Hanka, vicu<br />
Global Rank: [105](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [75]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  816.7<br />
<br />
Final Rank Value (816.7) = Starting Rank Value (752.3) + Head To Head Adjustments (64.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.039[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 752.3
- 400 + ( ( 0.184 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 752.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |        6 | 2024-10-02 | Spirit fe    | W   | 1.000      | 0.328        | 0.005 (0.002)    | 0.119 (0.039)    | 0 (0.000) |     8.42 | Angelka, ASTRA, D7, Hanka, vicu   |
|           19 |      518 | 2024-09-18 | ENCE Athena  | W   | 1.000      | 0.328        | -                | 0.033 (0.011)    | 0 (0.000) |     6.32 | Angelka, ASTRA, D7, Hanka, vicu   |
|           18 |      602 | 2024-09-15 | Imperial fe  | W   | 1.000      | 0.294        | 0.067 (0.020)    | 0.237 (0.070)    | 0 (0.000) |    20.86 | Angelka, ASTRA, D7, Hanka, vicu   |
|           17 |      630 | 2024-09-14 | NIP Impact   | W   | 1.000      | 0.294        | 0.004 (0.001)    | 0.190 (0.056)    | 0 (0.000) |    13.29 | Angelka, ASTRA, D7, Hanka, vicu   |
|           16 |      640 | 2024-09-14 | Spirit fe    | W   | 1.000      | 0.294        | 0.005 (0.002)    | 0.119 (0.035)    | 0 (0.000) |    10.26 | Angelka, ASTRA, D7, Hanka, vicu   |
|           15 |      883 | 2024-09-05 | NIP Impact   | L   | 1.000      | -            | -                | -                | -         |   -18.59 | Angelka, ASTRA, D7, Hanka, vicu   |
|           14 |     1077 | 2024-08-29 | Let Her Cook | W   | 0.973      | 0.328        | 0.030 (0.010)    | 0.111 (0.036)    | 0 (0.000) |    15.95 | Angelka, ASTRA, D7, Hanka, vicu   |
|           13 |     3571 | 2024-06-01 | Fluxo Demons | L   | 0.381      | -            | -                | -                | -         |    -6.32 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     3603 | 2024-05-31 | TSM Impact   | W   | 0.375      | 0.524        | 0.007 (0.001)    | 0.037 (0.007)    | 1 (0.375) |     3.92 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     3616 | 2024-05-31 | Let Her Cook | L   | 0.373      | -            | -                | -                | -         |    -5.66 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     3926 | 2024-05-19 | Imperial fe  | W   | 0.293      | 0.281        | 0.067 (0.006)    | 0.237 (0.020)    | 0 (0.000) |     5.83 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     3932 | 2024-05-19 | BIG EQUIPA   | W   | 0.291      | 0.281        | 0.008 (0.001)    | 0.097 (0.008)    | 0 (0.000) |     3.68 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     3962 | 2024-05-18 | Spirit fe    | W   | 0.285      | 0.281        | 0.005 (0.000)    | 0.119 (0.010)    | 0 (0.000) |     3.33 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     4697 | 2024-04-19 | Crescent fe  | W   | 0.093      | -            | -                | -                | -         |     1.01 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     4824 | 2024-04-16 | Imperial fe  | W   | 0.073      | 0.303        | 0.067 (0.001)    | -                | -         |     1.47 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     4845 | 2024-04-15 | NIP Impact   | W   | 0.066      | -            | -                | -                | -         |     0.82 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     4863 | 2024-04-14 | Astralis W   | W   | 0.059      | -            | -                | -                | -         |     0.37 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     4876 | 2024-04-13 | Imperial fe  | L   | 0.052      | -            | -                | -                | -         |    -0.59 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     4917 | 2024-04-11 | Spirit fe    | W   | 0.039      | -            | -                | -                | -         |     0.47 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     5018 | 2024-04-09 | NIP Impact   | L   | 0.025      | -            | -                | -                | -         |    -0.49 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,552.12)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-15 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-02 |      0.387 | $7,000.00      | $2,710.85       |
| 2024-05-19 |      0.293 | $2,000.00      | $585.19         |
| 2024-04-16 |      0.073 | $3,500.00      | $256.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
