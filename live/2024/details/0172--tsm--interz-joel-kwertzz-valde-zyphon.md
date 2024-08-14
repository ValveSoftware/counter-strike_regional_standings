### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Global Rank: [172](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [109]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  660.6<br />
<br />
Final Rank Value (660.6) = Starting Rank Value (654.3) + Head To Head Adjustments (6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.3
- 400 + ( ( 0.129 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 654.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3040 | 2024-04-19 | Sangal         | L   | 0.420      | -            | -                | -                | -         |    -0.82 | interz, joel, KWERTZZ, valde, Zyphon |
|           10 |     3296 | 2024-04-10 | FORZE          | L   | 0.360      | -            | -                | -                | -         |    -2.57 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            9 |     3354 | 2024-04-09 | Betera         | W   | 0.353      | 0.500        | 0.005 (0.001)    | 0.030 (0.005)    | 0 (0.000) |     6.18 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            8 |     3485 | 2024-04-04 | 9 Pandas       | L   | 0.320      | -            | -                | -                | -         |    -1.33 | joel, KWERTZZ, poizon, valde, Zyphon |
|            7 |     3564 | 2024-04-02 | KOI            | L   | 0.306      | -            | -                | -                | -         |    -1.16 | joel, KWERTZZ, poizon, valde, Zyphon |
|            6 |     3624 | 2024-03-28 | 9INE           | W   | 0.273      | 0.500        | 0.000 (0.000)    | 0.060 (0.008)    | 0 (0.000) |     2.74 | joel, KWERTZZ, poizon, valde, Zyphon |
|            5 |     3781 | 2024-03-20 | VP.Prodigy     | L   | 0.218      | -            | -                | -                | -         |    -1.80 | joel, KWERTZZ, poizon, valde, Zyphon |
|            4 |     3892 | 2024-03-14 | EYEBALLERS     | W   | 0.181      | 0.500        | 0.005 (0.000)    | 0.614 (0.055)    | 0 (0.000) |     4.53 | interz, joel, MoDo, valde, Zyphon    |
|            3 |     4104 | 2024-03-06 | Sangal         | L   | 0.127      | -            | -                | -                | -         |    -0.22 | interz, JACKZ, joel, poizon, valde   |
|            2 |     4185 | 2024-03-03 | The Chosen Few | L   | 0.106      | -            | -                | -                | -         |    -1.68 | joel, KWERTZZ, poizon, valde, Zyphon |
|            1 |     4197 | 2024-03-03 | Nexus          | W   | 0.106      | 0.143        | 0.013 (0.000)    | 0.548 (0.008)    | 0 (0.000) |     2.42 | joel, KWERTZZ, poizon, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,519.70)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
