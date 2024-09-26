### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, LETi, pauliiee, Zana<br />
Global Rank: [159](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [104]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  680.3<br />
<br />
Final Rank Value (680.3) = Starting Rank Value (686.7) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.7
- 400 + ( ( 0.152 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 686.7


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
|           15 |       53 | 2024-09-25 | Permitta W        | W   | 1.000      | 0.328        | 0.001 (0.000)    | 0.072 (0.024)    | 0 (0.000) |    12.25 | JennyR, juliano, LETi, pauliiee, Zana   |
|           14 |      412 | 2024-09-14 | dream catchers fe | L   | 1.000      | -            | -                | -                | -         |   -12.39 | JennyR, juliano, LETi, pauliiee, Zana   |
|           13 |      493 | 2024-09-11 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -6.76 | JennyR, juliano, LETi, pauliiee, Zana   |
|           12 |      846 | 2024-08-29 | Crescent fe       | W   | 1.000      | 0.328        | 0.002 (0.001)    | 0.047 (0.016)    | 0 (0.000) |    13.23 | JennyR, juliano, LETi, pauliiee, Zana   |
|           11 |     2280 | 2024-07-20 | dream catchers fe | L   | 0.746      | -            | -                | -                | -         |   -11.57 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     3336 | 2024-06-01 | HSG fe            | L   | 0.422      | -            | -                | -                | -         |    -5.92 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     3374 | 2024-05-31 | Imperial fe       | L   | 0.415      | -            | -                | -                | -         |    -3.51 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     3385 | 2024-05-31 | FlyQuest RED      | W   | 0.413      | 0.524        | 0.011 (0.002)    | 0.186 (0.040)    | 1 (0.413) |     6.54 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     3699 | 2024-05-19 | NAVI Javelins     | L   | 0.332      | -            | -                | -                | -         |    -4.22 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     3726 | 2024-05-18 | Nemesis fe        | W   | 0.327      | 0.281        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.68 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     4412 | 2024-04-20 | Fearless Cheetahs | W   | 0.141      | 0.331        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.64 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     4458 | 2024-04-19 | NIP Impact        | W   | 0.134      | 0.331        | 0.004 (0.000)    | 0.222 (0.010)    | 0 (0.000) |     2.05 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     4847 | 2024-04-07 | Imperial fe       | L   | 0.052      | -            | -                | -                | -         |    -0.45 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     4862 | 2024-04-06 | Spirit fe         | W   | 0.046      | 0.262        | 0.006 (0.000)    | 0.135 (0.002)    | 0 (0.000) |     0.68 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     4912 | 2024-04-04 | ENCE Athena       | W   | 0.034      | 0.331        | 0.001 (0.000)    | 0.039 (0.000)    | 0 (0.000) |     0.40 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,997.29)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
