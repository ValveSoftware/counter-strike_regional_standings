### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Global Rank: [150](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [99]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  715.6<br />
<br />
Final Rank Value (715.6) = Starting Rank Value (730.0) + Head To Head Adjustments (-14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.0
- 400 + ( ( 0.167 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 730.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1379 | 2024-07-20 | dream catchers fe | L   | 0.940      | -            | -                | -                | -         |   -15.44 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |     2435 | 2024-06-01 | HSG fe            | L   | 0.616      | -            | -                | -                | -         |    -8.21 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |     2473 | 2024-05-31 | Imperial fe       | L   | 0.608      | -            | -                | -                | -         |    -4.32 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |     2484 | 2024-05-31 | FlyQuest RED      | W   | 0.607      | 0.524        | 0.017 (0.005)    | 0.121 (0.038)    | 1 (0.607) |     9.43 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |     2798 | 2024-05-19 | NAVI Javelins     | L   | 0.526      | -            | -                | -                | -         |    -7.06 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     2825 | 2024-05-18 | Nemesis fe        | W   | 0.520      | 0.281        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.12 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     3511 | 2024-04-20 | Fearless Cheetahs | W   | 0.334      | 0.331        | 0.002 (0.000)    | 0.036 (0.004)    | 0 (0.000) |     4.29 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     3557 | 2024-04-19 | NIP Impact        | W   | 0.327      | 0.331        | 0.007 (0.001)    | 0.166 (0.018)    | 0 (0.000) |     4.74 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     3946 | 2024-04-07 | Imperial fe       | L   | 0.246      | -            | -                | -                | -         |    -1.74 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     3961 | 2024-04-06 | Spirit fe         | W   | 0.239      | 0.262        | 0.006 (0.000)    | 0.112 (0.007)    | 0 (0.000) |     2.95 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     4011 | 2024-04-04 | ENCE Athena       | W   | 0.227      | 0.331        | 0.002 (0.000)    | 0.051 (0.004)    | 0 (0.000) |     2.56 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     4144 | 2024-03-28 | Astralis W        | L   | 0.181      | -            | -                | -                | -         |    -3.56 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     4419 | 2024-03-14 | Imperial fe       | L   | 0.088      | -            | -                | -                | -         |    -0.63 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     4627 | 2024-03-06 | Astralis W        | W   | 0.034      | 0.331        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.26 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     4703 | 2024-03-03 | dream catchers fe | W   | 0.014      | 0.250        | 0.018 (0.000)    | 0.178 (0.001)    | 0 (0.000) |     0.22 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,360.89)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.621 | $7,000.00      | $4,350.04       |
| 2024-03-03 |      0.014 | $750.00        | $10.86          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
