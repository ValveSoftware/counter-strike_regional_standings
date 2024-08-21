### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Global Rank: [202](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_14.md)<br />
Regional Rank: [126]( ../../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  543.4<br />
<br />
Final Rank Value (543.4) = Starting Rank Value (533.0) + Head To Head Adjustments (10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 533.0
- 400 + ( ( 0.067 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 533.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     3870 | 2024-03-15 | MOUZ NXT        | L   | 0.185      | -            | -                | -                | -         |    -0.41 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3907 | 2024-03-14 | ex-Preasy       | L   | 0.177      | -            | -                | -                | -         |    -1.34 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3996 | 2024-03-11 | ECLOT           | W   | 0.157      | 0.371        | 0.078 (0.005)    | 0.501 (0.029)    | 0 (0.000) |     4.85 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     4013 | 2024-03-10 | ALTERNATE aTTaX | W   | 0.152      | 0.371        | 0.036 (0.002)    | 0.496 (0.028)    | 0 (0.000) |     4.35 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     4042 | 2024-03-09 | Alliance        | L   | 0.144      | -            | -                | -                | -         |    -0.74 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     4057 | 2024-03-08 | Passion UA      | L   | 0.138      | -            | -                | -                | -         |    -0.22 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     4158 | 2024-03-05 | 500             | L   | 0.118      | -            | -                | -                | -         |    -1.12 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     4175 | 2024-03-04 | Sashi           | W   | 0.111      | 0.371        | 0.183 (0.007)    | 1.000 (0.041)    | 0 (0.000) |     3.36 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     4304 | 2024-02-26 | 9INE            | W   | 0.065      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.91 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     4325 | 2024-02-25 | Secret          | W   | 0.058      | 0.358        | 0.000 (0.000)    | 0.046 (0.001)    | 0 (0.000) |     0.91 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     4375 | 2024-02-23 | Sampi           | L   | 0.044      | -            | -                | -                | -         |    -0.19 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     4420 | 2024-02-21 | MOUZ NXT        | L   | 0.031      | -            | -                | -                | -         |    -0.06 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4507 | 2024-02-17 | The Chosen Few  | W   | 0.007      | 0.358        | 0.001 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.15 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
