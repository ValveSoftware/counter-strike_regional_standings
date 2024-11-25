### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, LETi, pauliiee, Zana<br />
Global Rank: [103](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [76]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  869.3<br />
<br />
Final Rank Value (869.3) = Starting Rank Value (867.5) + Head To Head Adjustments (1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.403[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.222[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.5
- 400 + ( ( 0.234 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 867.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       19 | 2024-11-24 | Imperial fe  | L   | 1.000      | -            | -                | -                | -         |    -5.27 | JennyR, juliano, LETi, pauliiee, Zana   |
|           14 |       40 | 2024-11-23 | NIP Impact   | W   | 1.000      | 0.524        | 0.019 (0.010)    | 0.180 (0.094)    | 1 (1.000) |    14.31 | JennyR, juliano, LETi, pauliiee, Zana   |
|           13 |       60 | 2024-11-22 | FURIA fe     | L   | 1.000      | -            | -                | -                | -         |    -6.36 | JennyR, juliano, LETi, pauliiee, Zana   |
|           12 |       69 | 2024-11-22 | NIP Impact   | W   | 1.000      | 0.524        | 0.019 (0.010)    | 0.180 (0.094)    | 1 (1.000) |    14.64 | JennyR, juliano, LETi, pauliiee, Zana   |
|           11 |      777 | 2024-10-19 | Let Her Cook | W   | 0.954      | 0.328        | 0.006 (0.002)    | 0.091 (0.028)    | 0 (0.000) |     9.42 | JennyR, juliano, LETi, pauliiee, Zana   |
|           10 |      798 | 2024-10-18 | HSG fe       | L   | 0.949      | -            | -                | -                | -         |   -21.22 | JennyR, juliano, LETi, pauliiee, Zana   |
|            9 |     1171 | 2024-10-03 | K27 fe       | W   | 0.849      | 0.328        | 0.015 (0.004)    | 0.188 (0.052)    | 0 (0.000) |    11.23 | JennyR, juliano, LETi, pauliiee, Zana   |
|            8 |     1490 | 2024-09-25 | Permitta W   | W   | 0.795      | 0.328        | 0.003 (0.001)    | 0.042 (0.011)    | 0 (0.000) |     5.67 | JennyR, juliano, LETi, pauliiee, Zana   |
|            7 |     1849 | 2024-09-14 | K27 fe       | L   | 0.720      | -            | -                | -                | -         |   -13.31 | JennyR, juliano, LETi, pauliiee, Zana   |
|            6 |     1930 | 2024-09-11 | Imperial fe  | L   | 0.702      | -            | -                | -                | -         |    -4.14 | JennyR, juliano, LETi, pauliiee, Zana   |
|            5 |     2283 | 2024-08-29 | Crescent fe  | W   | 0.615      | 0.328        | 0.003 (0.001)    | 0.046 (0.009)    | 0 (0.000) |     4.56 | JennyR, juliano, LETi, pauliiee, Zana   |
|            4 |     3717 | 2024-07-20 | K27 fe       | L   | 0.347      | -            | -                | -                | -         |    -7.18 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     4773 | 2024-06-01 | HSG fe       | L   | 0.023      | -            | -                | -                | -         |    -0.54 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     4811 | 2024-05-31 | Imperial fe  | L   | 0.016      | -            | -                | -                | -         |    -0.10 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     4822 | 2024-05-31 | FlyQuest RED | W   | 0.014      | 0.524        | 0.012 (0.000)    | 0.193 (0.001)    | 1 (0.014) |     0.13 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,204.18)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      1.000 | $13,000.00     | $13,000.00      |
| 2024-06-02 |      0.029 | $7,000.00      | $204.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
